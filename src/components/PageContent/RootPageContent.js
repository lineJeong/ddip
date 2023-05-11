import styled, { css } from "styled-components";

const StyledRootPageContent = styled.main`
  max-width: 1220px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ maxWidth }) => {
    if (maxWidth === "md") {
      return css`
        max-width: 1016px;
      `;
    }
    if (maxWidth === "sm") {
      return css`
        max-width: 406px;
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
