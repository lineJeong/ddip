import styled, { css } from "styled-components";

const colorStyles = css`
  ${({ theme, background, color }) => {
    const selectedBg = theme.palette[background];
    const selectedColor = theme.palette[color];
    return css`
      background: ${selectedBg};
      color: ${selectedColor};
    `;
  }}
`;

const sizes = {
  lg: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  md: {
    height: "2.875rem",
    fontSize: "1rem"
  },
  sm: {
    height: "2.5rem",
    fontSize: "0.875rem"
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button.attrs(({ onClick }) => {
  onClick;
})`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  outline: none;
  border: none;
  border-radius: 5px;
  ${({ radius }) =>
    radius === "bottom" &&
    css`
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    `}

  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0.875rem;
  padding-left: 0.875rem;
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}

  ${colorStyles}

  ${sizeStyles}

  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid black;
    `}

  ${fullWidthStyle}

  > div:first-child {
    display: flex;
    ${({ iconWidth, iconHeight }) =>
      iconWidth &&
      css`
        width: ${iconWidth};
        height: ${iconHeight};
      `}

    ${({ iconWithText }) =>
      iconWithText &&
      css`
        margin-right: 6px;
      `}
  }
`;

function Button({
  children,
  background,
  color,
  size = "md",
  outline,
  fullWidth,
  marginTop,
  radius,
  iconWidth,
  iconHeight,
  iconWithText,
  onClick
}) {
  return (
    <StyledButton
      background={background}
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      marginTop={marginTop}
      radius={radius}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      iconWithText={iconWithText}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
