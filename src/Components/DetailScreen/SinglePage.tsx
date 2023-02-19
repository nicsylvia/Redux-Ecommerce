import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const SinglePage = () => {
	return (
		<Container>
			<First></First>
			<Second>
				<h2>Heavy Weight Shoes</h2>
				<PriceHold>
					<Price>$30.00</Price>
                    <Ratting>
						<AiFillStar
							style={{
								color: "gold",
								marginRight: "10px",
							}}
						/>
						4.2(87 reviews)
					</Ratting>
				</PriceHold>
				<Holder>
					<ButtonHold>
						<But>-</But>
						<Count>0</Count>
						<But style={{ marginLeft: "20px" }}>+</But>
					</ButtonHold>
					<MainButton>Add To Cart</MainButton>
				</Holder>

				<DescHold>Description</DescHold>
				<br />
				<span style={{ marginTop: "10px" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
					et reiciendis, sit non dolor, aspernatur eligendi harum incidunt
					quidem pariatur iusto veniam minus inventore autem soluta id libero,
					quod accusamus a iste. Delectus iure facere quis sed quibusdam
					doloribus, nobis voluptate consequatur minima, natus voluptatibus nam
					consectetur, sint libero soluta?
				</span>
			</Second>
		</Container>
	);
};

export default SinglePage;

const DescHold = styled.div`
	width: 100%;
	background-color: #fafbfd;
	padding: 10px;
	margin-top: 30px;
	font-weight: 700;
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
`;

const But = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: #fafbfd;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 25px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	margin-right: 20px;
	cursor: pointer;
	/* margin-left: 20px; */
`;
