import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string
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
	}
  }
});

export const {} = ReduxState.actions

export default ReduxState.reducer