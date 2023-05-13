import styled from "styled-components";

const StyledIconButton = styled.button`
  min-height: ${({ height }) => height};
  min-width: ${({ width }) => width};
  background: ${({ theme, background }) => theme.palette[background]};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0px;
`;

function IconButton({ children, width, height, background }) {
  return (
    <StyledIconButton width={width} height={height} background={background}>
      {children}
    </StyledIconButton>
  );
}

export default IconButton;
