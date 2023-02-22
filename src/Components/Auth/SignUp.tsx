import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CreateNewUser } from '../API/Api';
import * as yup from "yup"

const SignUp = () => {

	const Schema = yup.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
	})

	// Query function to be able to create new users
	const RegisterUsers = useMutation({
		mutationKey: ["NewUsers"],
		mutationFn: CreateNewUser
	});

	const NewUsers = () =>{
		RegisterUsers.mutate({
			name,
			email,
			password,
			confirmPassword
		})
	};
	console.log(NewUsers)

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	return (
		<Container>
			<Card onSubmit={NewUsers}>
				<h3>Register</h3>
				<input 
				onChange={(e) =>{
					setName(e.target.value)
				}}
				placeholder='Enter your name' />
				{/* <p>{errors?.name && errors?.name?.message}</p> */}
				<input
				onChange={(e) =>{
					setEmail(e.target.value)
				}}
				placeholder='Enter your email' />
				{/* <p>{errors?.email && errors?.email?.message}</p> */}
				<input
				onChange={(e) =>{
					setPassword(e.target.value)
				}}
				placeholder='Enter your password' />
				{/* <p>{errors?.password && errors?.password?.message}</p> */}
				<input
				onChange={(e) =>{
					setConfirmPassword(e.target.value)
				}}
				placeholder='Confirm your password' />
				<MainButton onClick={NewUsers} type='submit'>Register</MainButton>
			</Card>
		</Container>
	);

}

export default SignUp;

const MainButton = styled.button`
	height: 45px;
	width: 250px;
	background-color: #123456;
	color: white;
	font-size: 17px;
	font-weight: 700;
	border: none;
	outline: none;
	border-radius: 30px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	cursor: pointer;
	margin-top: 20px;
`;

const Card = styled.form`
	padding: 20px;
	min-height: 300px;
	width: 400px;
	border: 1px solid #f1f1f1;
	input {
		height: 35px;
		width: 95%;
		/* margin: 10px; */
		border: 1px solid #f1f1f1;
		outline: border;
		/* :focus {
			border-color: red;
		} */
	}
	p {
		font-size: 11px;
		margin-bottom: 5px;
		padding: 0;
		color: red;
		/* min-height: 10px; */
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`;
