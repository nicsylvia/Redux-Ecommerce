import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string
}

interface CartData {
	title: string;
	desc: string;
	price: number;
	CartQuantity: number;
	_id: string;
	category: string;
}

const initialState = {
	currentUser : {} as UserData | null
}

const ReduxState = createSlice({
  name: "First-Ecommerce",
  initialState,
  reducers: {
	UserLogin: (state, {payload}: PayloadAction<UserData>) =>{
		state.currentUser = payload
	},
	UserLogOut: (state) =>{
		state.currentUser = null
	}
  }
});

export const { UserLogin, UserLogOut } = ReduxState.actions

export default ReduxState.reducer