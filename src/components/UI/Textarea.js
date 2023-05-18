import styled, { css } from "styled-components";

const StyledTextarea = styled.textarea.attrs(
  ({ name, placeholder, value, onChange }) => ({
    name,
    placeholder,
    value,
    onChange
  })
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

function Textarea({ name, placeholder, height, value, onChange }) {
  return (
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

export default Textarea;
