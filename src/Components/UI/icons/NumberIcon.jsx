import React from "react";
import styled from "styled-components";

function NumberIcon(props) {

  const StyledDiv = styled.div `
  width: 31px;
  height: 31px;
  border: 2px solid #C1C0B4;
  border-radius: 100%;
  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.07em;

  color:${({filled}) => filled ? '#0E170D' : '#C1C0B4'};
  background: ${({filled}) => filled ? '#C1C0B4' : 'transparent'} ;
  cursor: pointer;
  `

  return (
    <StyledDiv {...props}/>
  )
}

export default NumberIcon