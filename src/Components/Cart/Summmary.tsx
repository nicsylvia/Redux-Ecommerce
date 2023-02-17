import React from "react";
import styled from "styled-components";
import { MdOutlineDoNotDisturb } from "react-icons/md";

const Summmary = () => {
  return (
    <div>
        <Container>
        <Wrapper>
          <Title>Order Summary</Title>
          <Summaries>
            <Records>
              <TextDiv>Subtotal</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records>
              <TextDiv>Shipping extimate</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records>
              <TextDiv>Tax estimate</TextDiv>
              <NumberDiv>$3663</NumberDiv>
            </Records>
            <Records2>
              <TextDiv2>Order Total</TextDiv2>
              <NumberDiv2>$3663</NumberDiv2>
            </Records2>
          </Summaries>
          <Button>
            <button>Checkout</button>
          </Button>
          <Ending>
            <div>
              <MdOutlineDoNotDisturb />
            </div>
            <div>
              Learn more <span>Taxes</span> and <span>Shipping</span>
              Information
            </div>
          </Ending>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Summmary