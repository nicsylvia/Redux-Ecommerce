import React from 'react'
import styled from 'styled-components';
import yellowshirt from "../Assets/yellow-shirt.png"

const Discover = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Discover more. <span>Good things are waiting for you</span></h1>
                <CardHold>
                    <Card>
                        <Wrap>
                            <Text>
                            <Content>
                            <h3>Explore new arrivals</h3>
                            <h2>Shop the latest from top brands</h2>
                            </Content>
                            <Button>Show me all</Button>
                            </Text>
                            <Image>
                                <img src={yellowshirt} alt="" />
                            </Image>
                        </Wrap>
                    </Card>
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
    width: 700px;
    padding: 20px 0px 20px 0px;
    background-color: #EFF6FF;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrap = styled.div`
    width: 600px;
    padding: 10px 0px 10px 0px;
    background-color: green;
    display: flex;
`;
const Text = styled.div`
    width: 300px;
    background-color: purple;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Content = styled.div``;
const Image = styled.div`
    width: 300px;
    padding: 5px 0px 5px 0px;
    background-color: aqua;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Button = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 30px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;