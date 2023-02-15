import React from 'react';
import styled from 'styled-components';
import logo from "../Assets/logo.svg"

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src={logo} />
          <Navigation>
            <Nav>Men</Nav>
            <Nav>Women</Nav>
            <Nav>Beauty</Nav>
            <Nav>Sports</Nav>
            <Nav>Templates</Nav>
            <Nav>Explore</Nav>
          </Navigation>
          <Profile></Profile>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img``;
const Navigation = styled.div``;
const Nav = styled.div``;
const Profile = styled.div``;