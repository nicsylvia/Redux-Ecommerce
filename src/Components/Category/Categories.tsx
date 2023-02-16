import React, {useState } from 'react'
import styled from 'styled-components';
import { RiWomenLine, RiVipCrownLine } from "react-icons/ri"
import { AiOutlineMan } from "react-icons/ai"
import { IoDiamondOutline } from "react-icons/io5"

const Categories = () => {

  const [showwomen, setShowwomen] = useState<Boolean>(true)
  const [showmen, setshowmen] = useState<Boolean>(true)
  const [showkids, setshowkids] = useState<Boolean>(true)
  const [showsports, setShowsports] = useState<Boolean>(true)
  const [showbeauty, setShowbeauty] = useState<Boolean>(true)
  const [showjewelry, setShowjewelry] = useState<Boolean>(true)

  const togglewomen = () =>{
    setShowwomen(true)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglemen = () =>{
    setShowwomen(false)
    setshowmen(true)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglekids = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(true)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglesports= () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(true)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglebeauty = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(true)
    setShowjewelry(false)
  }
  
  const togglejewelry = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(true)
  }
  
  
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>Start exploring.</h1>
          <Category>
            {
              showwomen ? <Div onClick={togglewomen} bcc = "true" cc = "true">
              <span><RiWomenLine /></span>
              Women
            </Div> : ""
            }
            {
              showmen ? <Div onClick={togglemen} bcc = "true" cc = "true">
              <span><AiOutlineMan /></span>
              Man
            </Div> : null
            }
            {/* <Div>
              <span><RiWomenLine /></span>
              Kids
            </Div>
            <Div>
              <span><RiWomenLine /></span>
              Sports
            </Div>
            <Div>
              <span><RiVipCrownLine /></span>
              Beauty
            </Div>
            <Div>
              <span><IoDiamondOutline /></span>
              Jewelry
            </Div> */}
          </Category>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Categories;

const Div = styled.div<{bcc: string; cc: string}>`
  width: 150px;
  /* height: 50px; */
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  span{
    margin-right: 10px;
    font-size: 25px;
  }
  background-color: ${({bcc}) => bcc ? "#0F172A": "#DEEBFF"};
  color: ${({cc}) => cc ? "#fff" : "#0F172A"};
`;
const Category = styled.div`
  width: 800px;
  height: 50px;
  padding: 5px 0px 5px 0px;
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