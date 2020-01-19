import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import globalReducer from './global/reducers';

import mainReducer from '_screens/Main/Main.reducer';
import authReducer from '_screens/AuthFlow/AuthFlow.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['isLoading', 'main.common.isVisible'],
};

const combinedReducers = combineReducers({
  global: globalReducer,
  main: mainReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  {
    global: {
      tokens: {
        accessToken: 'admin',
        refreshToken: '40d9631f-0a64-4a2d-859d-744ff64ba502',
      },
    },
  },
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
