import styled, { css } from "styled-components";

const StyledRootPageContent = styled.main`
  max-width: 1240px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ maxWidth }) => {
    if (maxWidth === "md") {
      return css`
        max-width: 834px;
      `;
    }
    if (maxWidth === "sm") {
      return css`
        max-width: 426px;
      `;
    }
  }}
`;

function RootPageContent({ children, maxWidth = "lg" }) {
  return (
    <StyledRootPageContent maxWidth={maxWidth}>
      {children}
    </StyledRootPageContent>
  );
}

export default RootPageContent;
