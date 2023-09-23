import styled from "styled-components";

export default function Greenbutton({ children, onClick, margin }) {
  return (
    <StyledButton onClick={onClick} margin={margin}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  padding: 0.6rem;
  min-width: 6rem;
  color: var(--color-fourth);
  margin-bottom: ${({ margin }) => margin + "rem"};
  &:active {
    box-shadow: inset 1px 1px 5px 0px black;
  }
`;
