import React from 'react';
import { ShopHeader } from '../shop/ShopHeader';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledPage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  background: #0e170d;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 90px;
  gap: 30px;
  align-self: stretch;
  flex-grow: 1;
  overflow: auto;
`;

const ShopLayout: React.FC = () => {
  return (
    <StyledPage>
      <StyledContainer>
        <ShopHeader productPage />
        <Outlet />
      </StyledContainer>
    </StyledPage>
  );
};

export default ShopLayout;
