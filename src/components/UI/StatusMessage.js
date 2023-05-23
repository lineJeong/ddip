import styled, { css } from "styled-components";

const StyledStatusMessage = styled.p`
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

function StatusMessage({ hasStatusMessage, success, children }) {
  if (!hasStatusMessage) return null;

  return (
    <StyledStatusMessage success={success}>{children}</StyledStatusMessage>
  );
}

export default StatusMessage;
