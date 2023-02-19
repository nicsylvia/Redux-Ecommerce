import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface UserData {
	name: string;
	email: string;
	password: string;
}

const initialState = {
	currentUser: {} || null,
};

const ReduxState = createSlice({
	name: "ecomerce",
	initialState,
	reducers: {
		loginUser: (state, { payload }: PayloadAction<UserData>) => {
			state.currentUser = payload;
		},
	},
});

export const { loginUser } = ReduxState.actions;

export default ReduxState.reducer;