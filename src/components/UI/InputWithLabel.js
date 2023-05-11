import styled from "styled-components";

import Input from "./Input";

const StyledInputWithLabel = styled.div`
  width: 100%;

  > .label-wrapper {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 6px;
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
  radius = "default"
}) {
  return (
    <StyledInputWithLabel>
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
      />
    </StyledInputWithLabel>
  );
}

export default InputWithLabel;
