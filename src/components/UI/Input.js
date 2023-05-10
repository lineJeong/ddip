import styled, { css } from "styled-components";

const StyledInput = styled.div`
  width: 100%;

  > .label-wrapper {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 6px;
  }

  > input {
    width: 100%;
    min-height: 42px;
    padding: 0px 18px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border: 1px solid black;
    border-radius: 5px 5px 5px 5px;

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
  }
`;

function Input({
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
    <StyledInput radius={radius}>
      {label && (
        <div className="label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </StyledInput>
  );
}

export default Input;
