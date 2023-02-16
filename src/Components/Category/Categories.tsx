import React from 'react'
import styled from 'styled-components';
import { RiWomenLine } from "react-icons/ri"
import { AiOutlineMan } from "react-icons/ai"

const Categories = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>Start exploring.</h1>
          <Category>
            <Div>
              <span><RiWomenLine /></span>
              Women
            </Div>
            <Div>
              <span><AiOutlineMan /></span>
              Man
            </Div>
            <Div>
              <span><RiWomenLine /></span>
              Kids
            </Div>
            <Div>
              <span><RiWomenLine /></span>
              Sports
            </Div>
            <Div>
              <span><RiWomenLine /></span>
              Beauty
            </Div>
            <Div>
              <span><RiWomenLine /></span>
              Jewelry
            </Div>
          </Category>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Categories;

const Div = styled.div`
  width: 150px;
  /* height: 50px; */
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  span{
    margin-right: 10px;
    font-size: 25px;
  }
`;
const Category = styled.div`
  width: 800px;
  height: 50px;
  padding: 10px 0px 10px 0px;
  background-color: #fff;
  border-radius: 40px;
  color: #0F172A;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0px 40px 0px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  padding: 70px 0px 70px 0px;
  border-radius: 30px;
  background-color: #F7F7F9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0px 50px 0px;
`;