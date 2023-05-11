import styled from "styled-components";

const StyledErrorMsg = styled.p`
  color: ${({ theme }) => theme.palette.errorRed};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 6px;
  align-self: flex-start;
`;

function ErrorMsg({ hasError, children }) {
  if (!hasError) return null;

  return <StyledErrorMsg>{children}</StyledErrorMsg>;
}

export default ErrorMsg;
