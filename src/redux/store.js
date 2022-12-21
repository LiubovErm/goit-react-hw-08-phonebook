import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { contactsApi } from './contactsApi'
import contactsSlice from './contactSlice'
import { modalSlice } from './modalSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: contactsSlice,
        [modalSlice.name]: modalSlice.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
    //   middleware: getDefaultMiddleware => [
    //      ...getDefaultMiddleware({
    //     serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
    //     contactsApi.middleware,
    // ],
})

export const persistor = persistStore(store);
