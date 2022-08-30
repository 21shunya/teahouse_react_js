import React from "react";
import styled from "styled-components";
import SmallArrowIcon from "../UI/icons/SmallArrowIcon"
import PrimaryBtn from "./buttons/PrimaryBtn";
import arrowTop from"../../assets/small-arrow-top.svg"
import arrowBottom from"../../assets/small-arrow-bottom.svg"

function QuantityChange(props) {
  const Container = styled.div `
    display: flex;
    align-self: stretch;
  `
  const BtnContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  `
  return (
    <Container>
      <PrimaryBtn {...props}/>
      <BtnContainer>
        <SmallArrowIcon>
          <img src={arrowTop} alt=""/>
        </SmallArrowIcon>
        <SmallArrowIcon>
          <img src={arrowBottom} alt=""/>
        </SmallArrowIcon>
      </BtnContainer>
    </Container>
  )
}

export default QuantityChange