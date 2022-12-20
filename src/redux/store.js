import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi'
import contactsSlice from './contactSlice'
import { modalSlice } from './modalSlice';
import { authReducer } from './authSlice';
import storage from 'redux-persist/lib/storage';
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

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: contactsSlice,
        [modalSlice.name]: modalSlice.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
      middleware: getDefaultMiddleware => [
         ...getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
        contactsApi.middleware,
    ],
})

export const persistor = persistStore(store);
