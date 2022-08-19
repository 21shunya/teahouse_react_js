import React from "react";
import styled from "styled-components";
import NumberIcon from "./icons/NumberIcon";

function Pagination({totalCount, limit, setPage, page}) {
  const totalPages =  Math.ceil(totalCount / limit)
  const pageArray = []
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i)
  }
  const PaginationWrapper = styled.div `
  display: flex;
  gap: 10px;
  order: 3;
  `
  const StyledBtn = styled.button `
    display: flex;
    justify-conntent: center;
    align-items: center;
    background: transparent;
    width: 31px;
    height: 31px;
  `

  return (
    <PaginationWrapper>
      <StyledBtn onClick={() => setPage(page-1)}>
        <img src='arrow-left.svg' alt='' />
      </StyledBtn>
      {pageArray.map(p =>
      page === p 
      ? <NumberIcon
          key={p}
          onClick={() => setPage(p)}
          filled>
            {p}
        </NumberIcon>
      : <NumberIcon
        key={p}
        onClick={() => setPage(p)}>
        {p}
      </NumberIcon>
      )}
      <StyledBtn onClick={() => setPage(page+1)}>
        <img src='arrow-right.svg' alt='' />
      </StyledBtn>
    </PaginationWrapper>
  )
}

export default Pagination