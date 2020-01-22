import {
  API_VERSION,
  API_ADDRESS,
  REQUEST_LOGGING_ENABLED,
  PAYLOAD_LOGGING_ENABLED,
} from './server.config';
import {ERR_500, ERR_NULL} from './server.errors';

//redux
import {saveAccessToken} from '_redux/global/actions';
import {store} from '_redux/store';

//helpers
function addAuthorizationHeader(headers) {
  const accessToken = store.getState().global.tokens.accessToken;
  headers['Authorization'] = 'Bearer ' + accessToken;
}

function getRefreshToken() {
  return store.getState().global.tokens.refreshToken;
}

function jsonToUrl(data) {
  let urlParams = new URLSearchParams(data).toString();

  if (urlParams.length !== 0) {
    urlParams = '?' + urlParams;
  }

  return urlParams;
}

function constructEndpoint(route, apiVersion) {
  return API_ADDRESS + apiVersion + route;
}

function getContentType(isMultipart) {
  return isMultipart ? 'multipart/form-data' : 'application/json';
}

async function checkAuth(route, data, res) {
  if (res.status === 401) {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      return {...res, reauth: true};
    }
    let refreshRes = await post(
      '/oauth/refresh',
      {
        refreshToken,
      },
      false,
    );

    switch (refreshRes.status) {
      case 404:
        return {...refreshRes, reauth: true};
      case 500:
        return refreshRes;
      case 200: {
        store.dispatch(saveAccessToken(refreshRes.body.accessToken));
        return get(route, data);
      }
    }
  } else {
    return res;
  }
}

function parseBody(response) {
  if (response._bodyBlob) {
    const contentType = response.headers.map['content-type'];
    if (!contentType) {
      return {};
    } else if (contentType.startsWith('application/json')) {
      return response.json();
    } else {
      return {statusText: response.statusText};
    }
  } else {
    return {};
  }
}

function sendBodyRequest(
  route,
  data,
  isMultipart,
  method,
  isProtected,
  apiVersion,
) {
  let headers = {
    Accept: 'application/json',
    'Content-Type': getContentType(isMultipart),
  };

  if (isProtected) {
    addAuthorizationHeader(headers);
  }

  const endpoint = constructEndpoint(route, apiVersion);
  const body = isMultipart ? data : JSON.stringify(data);

  if (PAYLOAD_LOGGING_ENABLED) {
    console.log(body);
  }

  return fetch(endpoint, {
    method,
    headers,
    body,
  })
    .then(requestLogger)
    .then(bodyRequestResolve)
    .then(res => (isProtected ? checkAuth(route, data, res, get) : res))
    .catch(reqReject);
}

async function bodyRequestResolve(response) {
  //parse json if proper content-type
  const body = await parseBody(response);

  let error = null;
  if (response.status === 500) error = ERR_500;

  return {
    body,
    status: response.status,
    ok: response.ok,
    error: error,
  };
}

function sendQueryRequest(route, data, method, isProtected, apiVersion) {
  let headers = {
    Accept: 'application/json',
  };

  if (isProtected) {
    addAuthorizationHeader(headers);
  }

  const endpoint = constructEndpoint(route, apiVersion) + jsonToUrl(data);

  if (PAYLOAD_LOGGING_ENABLED) {
    console.log(data);
  }

  return fetch(endpoint, {
    method: method,
    headers: headers,
  })
    .then(requestLogger)
    .then(queryRequestResolve)
    .then(res => (isProtected ? checkAuth(route, data, res) : res))
    .catch(reqReject);
}

async function queryRequestResolve(response) {
  //parse json if proper content-type
  const body = await parseBody(response);

  let error = null;
  if (response.status == 500) {
    error = ERR_500;
  }

  return {
    body,
    status: response.status,
    ok: response.ok,
    error: error,
  };
}

function reqReject(res) {
  return {status: null, error: ERR_NULL};
}

//middlewares
function requestLogger(res) {
  if (REQUEST_LOGGING_ENABLED) {
    console.log(res.status + ' ' + res.url);
  }

  return res;
}

//POST
function post(
  route,
  data = {},
  isMultipart = false,
  isProtected = true,
  apiVersion = API_VERSION,
) {
  return sendBodyRequest(
    route,
    data,
    isMultipart,
    'POST',
    isProtected,
    apiVersion,
  );
}

//PUT
function put(
  route,
  data = {},
  isMultipart = false,
  isProtected = true,
  apiVersion = API_VERSION,
) {
  return sendBodyRequest(
    route,
    data,
    isMultipart,
    'PUT',
    isProtected,
    apiVersion,
  );
}

//PATCH
function patch(
  route,
  data = {},
  isMultipart = false,
  isProtected = true,
  apiVersion = API_VERSION,
) {
  return sendBodyRequest(
    route,
    data,
    isMultipart,
    'PATCH',
    isProtected,
    apiVersion,
  );
}

//GET
function get(route, data = {}, isProtected = true, apiVersion = API_VERSION) {
  return sendQueryRequest(route, data, 'GET', isProtected, apiVersion);
}

//DELETE
function del(route, isProtected = true, apiVersion = API_VERSION) {
  return sendQueryRequest(route, {}, 'DELETE', isProtected, apiVersion);
}

export {post, put, patch, get, del};
