import styled from "styled-components";

import IconButton from "./IconButton";

const StyledSimplePagination = styled.div`
  display: flex;
  align-items: end;

  > button + button {
    margin-left: 6px;
  }
`;

function SimplePagination() {
  return (
    <StyledSimplePagination>
      <IconButton width="40px" height="40px" background="white" outline>
        <img src="/images/previous.svg" alt="previous" />
      </IconButton>
      <IconButton width="40px" height="40px" background="white" outline>
        <img src="/images/next.svg" alt="next" />
      </IconButton>
    </StyledSimplePagination>
  );
}

export default SimplePagination;
