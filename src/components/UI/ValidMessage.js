import styled, { css } from "styled-components";

const StyledValidMessage = styled.p`
  color: ${({ theme }) => theme.palette.errorRed};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 6px;
  align-self: flex-start;

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.palette.successGreen};
    `}
`;

function ValidMessage({ hasValidMessage, success, children }) {
  if (!hasValidMessage) return null;

  return <StyledValidMessage success={success}>{children}</StyledValidMessage>;
}

export default ValidMessage;
