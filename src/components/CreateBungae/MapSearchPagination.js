import styled, { css } from "styled-components";

const StyledMapSearchPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.white};
  margin-left: 22px;
`;

const StyledPageNumber = styled.li`
  padding: 2px;
  margin-right: 2px;
  margin-left: 2px;
  cursor: pointer;

  ${({ current }) =>
    current &&
    css`
      color: ${({ theme }) => theme.palette.mainViolet};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    `}
`;

function MapSearchPagination({ pagination, handleClickPagination }) {
  if (!pagination.pages) return;

  return (
    <StyledMapSearchPagination>
      {pagination.pages.map((page, idx) => (
        <StyledPageNumber
          key={idx}
          current={page === pagination.current}
          onClick={() => handleClickPagination(page)}
        >
          {page}
        </StyledPageNumber>
      ))}
    </StyledMapSearchPagination>
  );
}

export default MapSearchPagination;
