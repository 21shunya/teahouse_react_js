import styled from 'styled-components';
import { SmallArrowIcon } from './icons/SmallArrowIcon';
import { PrimaryBtn } from './buttons/PrimaryBtn';
import React from 'react';
import arrowTop from '../../assets/small-arrow-top.svg';
import arrowBottom from '../../assets/small-arrow-bottom.svg';

const Container = styled.div`
  display: flex;
  align-self: stretch;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

interface IQuantityChange {
  children: number;
}

export const QuantityChange: React.FC<IQuantityChange> = (props) => {
  return (
    <Container>
      <PrimaryBtn>{props.children}</PrimaryBtn>
      <BtnContainer>
        <SmallArrowIcon>
          <img src={arrowTop} alt="" />
        </SmallArrowIcon>
        <SmallArrowIcon>
          <img src={arrowBottom} alt="" />
        </SmallArrowIcon>
      </BtnContainer>
    </Container>
  );
};

export default QuantityChange;
