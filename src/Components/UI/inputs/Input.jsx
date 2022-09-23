import styled from 'styled-components';

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;

  width: 400px;

  border: 2px solid #74755d;
  border-radius: 100px;
  background: transparent;

  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;

  letter-spacing: 0.07em;

  color: #74755d;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
