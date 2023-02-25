import React from 'react';
import styled from "styled-components";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import pic from "../Assets/shirt.png";
import { AiOutlineCheck } from "react-icons/ai";
import Summmary from './Summmary';
import MainCartPage from './MainCartPage';
import { useAppDispatch, useAppSelector } from '../Global/Store';
import { clearCart } from '../Global/ReduxState';


const CartProps = () => {

  const readFromMyCart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch();
  return (
    <div>
        <div>
      <Container>
        <Wrapper>
          <Head>
            <Div>
            <Title>Shopping Cart</Title>
            <Split>
              Homepage / Clothing Categories / <span> Shopping Cart</span>
            </Split>
            </Div>
            <Btn onClick={() =>{
              dispatch(clearCart())
            }} >
              Clear Cart
            </Btn>
          </Head>
          <br />
          <br />
          <Body>
           {
            readFromMyCart.map((props) =>(
              <Product>
              <MainCartPage
                price={props.price}
                dp={pic}
                name= {props.title}
                status="Sold Out"
                sign={<MdOutlineDoNotDisturb />}
              />
            </Product>
            ))
           }
            <Summary>
              <Summmary />
            </Summary>
          </Body>
        </Wrapper>
      </Container>
    </div>
    </div>
  )
}

export default CartProps;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: calc(100% - 200px);
`;
const Div = styled.div`
  height: 230px;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #d1cece;
`;
const Btn = styled.div`
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-color: black;
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Head = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: blue; */
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 38px;
`;
const Split = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #686666;
  span {
    text-decoration: underline;
  }
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Product = styled.div`
  margin-right: 50px;
`;
const Summary = styled.div`
  flex: 1;
  position: relative;
`;
