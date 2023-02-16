import React from 'react'
import styled from 'styled-components';
import specialkid from "../Assets/specialkid.png"
import wrapbg from "../Assets/wrap-bg.svg"

const SpecialKids = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Img>
                    <img src={specialkid} alt="" />
                </Img>
                <Content></Content>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SpecialKids;

const Img = styled.div`
    width: 40%;
    height: 100%;
    background-color: yellow;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Content = styled.div`
    width: 40%;
    height: 80%;
    background-color: hotpink;
    margin-left: 30px;
`;

const Wrapper = styled.div`
    width: 90%;
    height: 600px;
    border-radius: 15px;
    background-color: #FEFCE8;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${wrapbg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;