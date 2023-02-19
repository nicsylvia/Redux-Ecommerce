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
