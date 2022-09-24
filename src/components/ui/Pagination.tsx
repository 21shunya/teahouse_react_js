import styled from 'styled-components';
import { decrementPage, incrementPage } from '../../utils/changePages';
import ArrowIcon from './icons/ArrowIcon';
import { NumberIcon } from './icons/NumberIcon';
import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  order: 3;
`;

interface IPagination {
  totalCount: number;
  limit: number;
  page: number;
  setPage: (item: number) => void;
}

export const Pagination: React.FC<IPagination> = ({ totalCount, limit, page, setPage }) => {
  const totalPages = Math.ceil(totalCount / limit);
  const pageArray = [];
  for (let i = 1; i <= totalPages; i++) {
    console.log('in cycle');
    pageArray.push(i);
  }

  return (
    <StyledDiv>
      <ArrowIcon left={true} onClick={() => decrementPage(page, setPage)} />
      {pageArray.map((item) =>
        item === page ? (
          <NumberIcon key={item} onClick={() => setPage(item)} filled={true}>
            {item}
          </NumberIcon>
        ) : (
          <NumberIcon key={item} onClick={() => setPage(item)} filled={false}>
            {item}
          </NumberIcon>
        ),
      )}
      <ArrowIcon left={false} onClick={() => incrementPage(page, totalPages, setPage)} />
    </StyledDiv>
  );
};

export default Pagination;
