import React from 'react';
import styled from 'styled-components';
import logo from "../Assets/isaac2.png";
import { CiSearch } from "react-icons/ci"
import { BsPerson } from "react-icons/bs"
import { RiShoppingCartLine } from "react-icons/ri"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src={logo} />
          <Navigation>
            <Nav to="/">Home</Nav>
            <Nav to="/">About</Nav>
            <Nav to="/">Services</Nav>
            <Nav to="/productdetails">Products</Nav>
          </Navigation>
          <Profile>
            <p>
            <CiSearch />
            </p>

            <P to = "/cart">
            <RiShoppingCartLine />
            <Count>
            <span>0</span>
            </Count>
            </P>
            <p>
              <Button to = "/signup">
                Get Started
              </Button>
            </p>
          </Profile>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header;

const Button = styled(Link)`
padding: 10px 20px;
background-color: #3d4fd7d6;
border: 0;
border-radius: 20px;
font-size: 16px;
font-weight: 500;
color: #fff;
text-decoration: none;

`

const Count = styled.div`
  width: 20px;
  height: 20px;
  background-color: #3d4fd7d6;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;


`

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled(Link)`
  margin-right: 30px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  p{
    margin-right: 30px;
    font-size: 25px;
    display: flex;

  }
`;
const P = styled(Link)`
margin-right: 30px;
    font-size: 25px;
    display: flex;
`;