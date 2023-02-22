import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export const Store = configureStore({

	reducer: {
		myReducer
	}
});

// Define your dispatch and your selector

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;