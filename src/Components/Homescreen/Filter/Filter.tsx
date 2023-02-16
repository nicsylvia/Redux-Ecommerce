import React from 'react'
import styled from 'styled-components';

const Filter = () => {
  return (
    <div>
        <Container>
            <Wrapper>

            </Wrapper>
        </Container>
    </div>
  )
}

export default Filter;

const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    background-color: blue;
    display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`;
const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;