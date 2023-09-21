import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>Elektromaschinenbau Schulze GmbH</StyledLogo>;
}

const StyledLogo = styled.h1`
  color: var(--color-third);
  font-size: var(--font-size-title);
  padding: 0.3rem;
  margin: 0;
  font-weight: bold;
`;
