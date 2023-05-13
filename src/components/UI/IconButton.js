import styled, { css } from "styled-components";

const StyledIconButton = styled.button`
  min-height: ${({ height }) => height};
  min-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  max-width: ${({ width }) => width};
  background: ${({ theme, background }) => theme.palette[background]};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0px;
  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid black;
    `}
`;

function IconButton({ children, width, height, background, outline }) {
  return (
    <StyledIconButton
      width={width}
      height={height}
      background={background}
      outline={outline}
    >
      {children}
    </StyledIconButton>
  );
}

export default IconButton;
