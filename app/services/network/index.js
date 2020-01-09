import {
    API_VERSION,
    API_ADDRESS,
    REQUEST_LOGGING_ENABLED,
    PAYLOAD_LOGGING_ENABLED
} from './server.config';
import { ERR_500, ERR_NULL } from './server.errors';

//device
import Device from '_services/device';

//redux
import { saveSessionToken } from '_redux/global/actions';
import { store } from '_redux/store';

//helpers
function addAuthorizationHeader(headers) {
    const sessionToken = store.getState().global.credentials.sessionToken;
    headers['Authorization'] = 'Token ' + sessionToken;
}

function addUserAgentHeader(headers) {
    headers['User-Agent'] = Device.getUserAgent();
}

function jsonToUrl(data) {
    let urlParams = new URLSearchParams(data).toString();

    if (urlParams.length != 0)
       urlParams = '?' + urlParams;
       
    return urlParams;
}

function constructEndpoint(route, apiVersion) {
    return API_ADDRESS + apiVersion + route;
}

function getContentType(isMultipart) {
    return (isMultipart) ? 'multipart/form-data' : 'application/json';
}

function parseBody(response) {
    if (response._bodyBlob) {
        const contentType = response.headers.map['content-type'];
        if (!contentType)
            return {};
        else if (contentType.startsWith('application/json'))
            return response.json();
        else
            return { statusText: response.statusText };
    }   
    else
        return {};
}

function sendBodyRequest(
    route, data, isMultipart,
    method, isProtected, apiVersion) {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': getContentType(isMultipart)
    };

    addUserAgentHeader(headers);
    if (isProtected) 
        addAuthorizationHeader(headers);

    const endpoint = constructEndpoint(route, apiVersion);
    const body = (isMultipart) ? data : JSON.stringify(data);

    if (PAYLOAD_LOGGING_ENABLED) {
        console.log(body);
    }

    return fetch(endpoint, {
        method: method,
        headers: headers,
        body: body
    })
    .then(requestLogger)
    .then(bodyRequestResolve)
    .then(res => isProtected ? checkForNewToken(res) : res)
    .catch(reqReject);
}

async function bodyRequestResolve(response) {
    //parse json if proper content-type
    const body = await parseBody(response);

    let error = null;
    if (response.status == 500)
        error = ERR_500;

    return { 
        body, 
        status: response.status,
        ok: response.ok,
        error
    };
}

function sendQueryRequest(route, data, method, isProtected, apiVersion) {
    let headers = {
        'Accept': 'application/json'
    };
    
    addUserAgentHeader(headers);
    if (isProtected) 
        addAuthorizationHeader(headers);

    const endpoint = constructEndpoint(route, apiVersion) + jsonToUrl(data);

    if (PAYLOAD_LOGGING_ENABLED) {
        console.log(data);
    }

    return fetch(endpoint, {
        method,
        headers
    })
    .then(requestLogger)
    .then(queryRequestResolve)
    .then(res => isProtected ? checkForNewToken(res) : res)
    .catch(reqReject);
}

async function queryRequestResolve(response) {
    //parse json if proper content-type
    const body = await parseBody(response);

    let error = null;
    if (response.status == 500)
        error = ERR_500;

    return { 
        body, 
        status: response.status,
        ok: response.ok,
        error
    };
}

function reqReject(res) {
    return { status: null, error: ERR_NULL };
}

//middlewares
function checkForNewToken(res) {
    if (res.body.meta && res.body.meta.session_token)
        //save new token
        store.dispatch(saveSessionToken(res.body.meta.session_token));
    
    return res;
}

function requestLogger(res) {
    if (REQUEST_LOGGING_ENABLED) {
        console.log(res.status + ' ' + res.url);
        //console.log(res);
    }

    return res;
}

//POST
function post(route, data = {}, isMultipart = false, isProtected = true,  apiVersion = API_VERSION) {
    return sendBodyRequest(route, data, isMultipart, 'POST', isProtected, apiVersion);
}

//PUT
function put(route, data = {}, isMultipart = false, isProtected = true, apiVersion = API_VERSION) {
    return sendBodyRequest(route, data, isMultipart, 'PUT', isProtected, apiVersion);
}

//PATCH
function patch(route, data = {}, isMultipart = false, isProtected = true, apiVersion = API_VERSION) {
    return sendBodyRequest(route, data, isMultipart, 'PATCH', isProtected, apiVersion);
}

//GET
function get(route, data = {}, isProtected = true, apiVersion = API_VERSION) {
    return sendQueryRequest(route, data, 'GET', isProtected, apiVersion);
}

//DELETE
function del(route, isProtected = true, apiVersion = API_VERSION) {
    return sendQueryRequest(route, {}, 'DELETE', isProtected, apiVersion);
}

export {
    post,
    put,
    patch,
    get,
    del
};
