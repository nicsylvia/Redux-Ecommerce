import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import myReducer from "./ReduxState";

export const store = configureStore({
	reducer: {
		myReducer,
	},
});

// define your despatch and selector

export const UseAppDispach: () => typeof store.dispatch = useDispatch;

export const UseAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
