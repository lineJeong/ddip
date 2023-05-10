import styled, { css } from "styled-components";

const StyledPageContent = styled.main`
  max-width: 1220px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ layout }) => {
    if (layout === "md") {
      return css`
        max-width: 1016px;
      `;
    }
    if (layout === "sm") {
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

function PageContent({ children, layout = "lg", background }) {
  return (
    <StyledPageContent layout={layout} background={background}>
      {children}
    </StyledPageContent>
  );
}

export default PageContent;
