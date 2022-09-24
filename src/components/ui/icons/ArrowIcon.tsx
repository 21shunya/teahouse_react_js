import styled from 'styled-components';
import React from 'react';
import arrowRight from './arrow-right.svg';
import arrowLeft from './arrow-left.svg';

const StyledBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 31px;
  border: none;
  cursor: pointer;
`;

interface IIcon {
  onClick?: () => void;
  left: boolean;
}

const ArrowIcon: React.FC<IIcon> = (props) => {
  return (
    <StyledBtn {...props}>
      {props.left ? <img src={arrowLeft} alt="" /> : <img src={arrowRight} alt="" />}
    </StyledBtn>
  );
};

export default ArrowIcon;
