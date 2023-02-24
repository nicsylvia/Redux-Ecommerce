import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: 'ecommerces',
	version: 1,
	Storage
  };

  const userPersistedReducer = persistReducer(persistConfig, myReducer)

  export const Store = configureStore({
		reducer: userPersistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});

// export const Store = configureStore({
// 	reducer: {
// 		myReducer
// 	}
// });

// Define your dispatch and your selector

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;