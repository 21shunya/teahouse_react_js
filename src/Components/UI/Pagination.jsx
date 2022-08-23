import React from "react";
import styled from "styled-components";
import { decrementPage, incrementPage } from "../../utils/ChangePages";
import ArrowIcon from "./icons/ArrowIcon";
import NumberIcon from "./icons/NumberIcon";

function Pagination({totalCount, limit, setPage, page}) {
  const totalPages =  Math.ceil(totalCount / limit)
  const pageArray = []
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i)
  }
  
  const StyledBtn = styled.button `
    display: flex;
    justify-conntent: center;
    align-items: center;
    background: transparent;
    width: 31px;
    height: 31px;
    border: none;
  `

  return (
    <div className="pagination-wrapper">
      <ArrowIcon onClick={() => decrementPage(page, setPage)}>
        <img src='arrow-left.svg' alt='' />
      </ArrowIcon>
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
      <ArrowIcon onClick={() => incrementPage(page, totalPages, setPage)}>
        <img src='arrow-right.svg' alt='' />
      </ArrowIcon>
    </div>
  )
}

export default Pagination