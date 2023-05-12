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
        max-width: 1036px;
      `;
    }
    if (maxWidth === "sm") {
      return css`
        max-width: 426px;
      `;
    }
  }}

  ${({ background }) =>
    background &&
    css`
      background: ${({ theme }) => theme.palette.mainMauve};
    `}
`;

function RootPageContent({ children, maxWidth = "lg", background }) {
  return (
    <StyledRootPageContent maxWidth={maxWidth} background={background}>
      {children}
    </StyledRootPageContent>
  );
}

export default RootPageContent;
