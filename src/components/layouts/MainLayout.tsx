import React from 'react';
import styled from 'styled-components';
import MainHeader from '../MainHeader';
import { Outlet } from 'react-router-dom';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../../../public/background.png);
  background-size: cover;
  background-position: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 60px;
  width: 1352px;
  height: 806px;
  background-image: url(../../../public/substrate_main_page.png);
`;

const MainLayout: React.FC = () => {
  return (
    <StyledPage>
      <StyledContainer>
        <MainHeader />
        <Outlet />
      </StyledContainer>
    </StyledPage>
  );
};

export default MainLayout;
