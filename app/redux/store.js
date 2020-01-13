import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import globalReducer from './global/reducers';

import mainReducer from '_screens/Main/Main.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['isLoading'],
};

const combinedReducers = combineReducers({
  global: globalReducer,
  main: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  {
    global: {
      tokens: {
        accessToken: 'c9ab9b00-6e06-4448-ae85-38561ccae4dd',
        refreshToken: '40d9631f-0a64-4a2d-859d-744ff64ba502',
      },
    },
  },
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
