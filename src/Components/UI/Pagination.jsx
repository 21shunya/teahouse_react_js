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

  return (
    <div className="pagination-wrapper">
      <ArrowIcon left onClick={() => decrementPage(page, setPage)} />
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
      <ArrowIcon right onClick={() => incrementPage(page, totalPages, setPage)} />
    </div>
  )
}

export default Pagination