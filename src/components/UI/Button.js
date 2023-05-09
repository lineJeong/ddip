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
  large: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  medium: {
    height: "2.875rem",
    fontSize: "1rem"
  },
  small: {
    height: "1.75rem",
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
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-top: 0.625rem;
      }
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};

  color: ${(props) => props.color || "black"};

  padding-right: 0.875rem;
  padding-left: 0.875rem;

  ${colorStyles}

  ${sizeStyles}

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid black;
    `}

  ${(props) =>
    props.noPadding &&
    css`
      padding: 0rem;
    `}

  ${fullWidthStyle}

  > .icon-with-text {
    margin-right: 6px;
  }
`;

function Button({
  children,
  background,
  color,
  size = "medium",
  outline,
  noPadding,
  fullWidth
}) {
  return (
    <StyledButton
      background={background}
      color={color}
      size={size}
      outline={outline}
      noPadding={noPadding}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
