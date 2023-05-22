import styled, { css } from "styled-components";

const StyledInput = styled.input.attrs(
  ({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    disabled,
    defaultValue,
    autocomplete
  }) => ({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    disabled,
    defaultValue,
    autocomplete
  })
)`
  width: 100%;
  height: ${({ height }) => height || "42px"};
  padding: 0px 14px;
  border: 1px solid black;
  border-radius: 5px 5px 5px 5px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  &:focus {
    outline-color: ${({ theme }) => theme.palette.mainViolet};
  }

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${({ theme }) => theme.fontSize[fontSize]};
    `}

  ${({ radius }) => {
    if (radius === "none") {
      return css`
        border-radius: 0px;
        border-bottom: 0px;
      `;
    }
    if (radius === "top") {
      return css`
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom: 0px;
      `;
    }
    if (radius === "bottom") {
      return css`
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
      `;
    }
  }}
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  radius = "default",
  height,
  fontSize,
  defaultValue,
  autocomplete
}) {
  return (
    <StyledInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      radius={radius}
      height={height}
      fontSize={fontSize}
      defaultValue={defaultValue}
      autocomplete={autocomplete}
    ></StyledInput>
  );
}

export default Input;
