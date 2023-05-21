import styled, { css } from "styled-components";

import Input from "./Input";

const StyledInputWithLabel = styled.div`
  width: 100%;

  > .label-wrapper {
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    ${({ fontSize }) =>
      fontSize &&
      css`
        font-size: ${({ theme }) => theme.fontSize[fontSize]};
      `}
  }
`;

function InputWithLabel({
  id,
  label,
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
  defaultValue
}) {
  return (
    <StyledInputWithLabel fontSize={fontSize}>
      <div className="label-wrapper">
        <label htmlFor={id}>{label}</label>
      </div>
      <Input
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
      />
    </StyledInputWithLabel>
  );
}

export default InputWithLabel;
