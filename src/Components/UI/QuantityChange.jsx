import React from "react";
import styled from "styled-components";
import SmallArrowIcon from "../UI/icons/SmallArrowIcon"
import PrimaryBtn from "./buttons/PrimaryBtn";

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
          <img src="small-arrow-top.svg" alt=""/>
        </SmallArrowIcon>
        <SmallArrowIcon>
          <img src="small-arrow-bottom.svg" alt=""/>
        </SmallArrowIcon>
      </BtnContainer>
    </Container>
  )
}

export default QuantityChange