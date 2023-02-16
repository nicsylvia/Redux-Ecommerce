import React from 'react'
import styled from 'styled-components';

const Discover = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Discover more. <span>Good things are waiting for you</span></h1>
                <CardHold>
                    <Card></Card>
                </CardHold>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Discover;

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    background-color: lue;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    span{
        color: gray;
    }
`;
const CardHold = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const Card = styled.div`
    width: 400px;
    padding: 30px 0px 30px 0px;
    background-color: orange;
    border-radius: 10px;
    margin: 20px;
`;