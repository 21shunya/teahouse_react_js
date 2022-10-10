import React from 'react';
import { MainPageNavbar } from './MainPageNavbar';
import { Logo } from './ui/logo/Logo';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 60px 0;
  align-self: stretch;
`;

const MainHeader = () => {
  return (
    <StyledDiv>
      <MainPageNavbar />
      <Logo />
    </StyledDiv>
  );
};

export default MainHeader;
