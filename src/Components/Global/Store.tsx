import myReducer from "./ReduxState";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
	key: 'Ecommerce',
	version: 1,
	storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, myReducer)

//   export const Store = configureStore({
// 		reducer: userPersistedReducer,
// 		middleware: (getDefaultMiddleware) =>
// 			getDefaultMiddleware({
// 				serializableCheck: {
// 					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 				},
// 			}),
// 	});

export const Store = configureStore({
	reducer: {
		myReducer
	}
});

// Define your dispatch and your selector

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;