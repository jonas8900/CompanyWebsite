import styled from "styled-components";

export default function Greenbutton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  padding: 0.6rem;
  color: var(--color-fourth);

  &:active {
    box-shadow: inset 1px 1px 5px 0px black;
  }
`;
