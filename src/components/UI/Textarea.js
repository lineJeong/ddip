import styled, { css } from "styled-components";

const StyledTextarea = styled.textarea.attrs(
  ({ placeholder, value, onChange }) => ({ placeholder, value, onChange })
)`
  width: 100%;
  padding: 14px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.base};
  resize: none;
  &:focus {
    outline-color: ${({ theme }) => theme.palette.mainViolet};
  }

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

function Textarea({ placeholder, height, value, onChange }) {
  return (
    <StyledTextarea
      placeholder={placeholder}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;
