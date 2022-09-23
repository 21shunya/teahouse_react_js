import styled from 'styled-components';
import { decrementPage, incrementPage } from '../../utils/changePages';
import ArrowIcon from './icons/ArrowIcon';
import NumberIcon from './icons/NumberIcon';

// eslint-disable-next-line react/prop-types
function Pagination({ totalCount, limit, page, setPage }) {
  console.log();
  const totalPages = Math.ceil(totalCount / limit);
  const pageArray = [];
  let isFilled = false;
  for (let i = 1; i <= totalPages; i++) {
    console.log('in cycle');
    pageArray.push(i);
  }
  console.log(pageArray);
  const StyledDiv = styled.div`
    display: flex;
    gap: 10px;
    order: 3;
  `;

  return (
    <StyledDiv>
      <ArrowIcon left onClick={() => decrementPage(page, setPage)} />
      {pageArray.map((item) =>
        item === page ? (
          <NumberIcon key={item} onClick={() => setPage(item)} filled>
            {item}
          </NumberIcon>
        ) : (
          <NumberIcon key={item} onClick={() => setPage(item)} isFilled={isFilled}>
            {item}
          </NumberIcon>
        ),
      )}
      <ArrowIcon right onClick={() => incrementPage(page, totalPages, setPage)} />
    </StyledDiv>
  );
}

export default Pagination;
