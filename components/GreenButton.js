import styled from "styled-components";

export default function Greenbutton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  padding: 0.6rem;
  color: var(--color-fourth);
`;
