import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";
import {useDispatch} from "react-redux"

export const Store = configureStore({

	reducer: {
		myReducer
	}
});

// Define your dispatch and your selector

export const useAppDispatch: () => typeof Store.dispatch = useDispatch