import styled from "styled-components";

const StyledSearchForm = styled.form`
  width: 100%;
  display: flex;
  border-radius: 5px;
  height: 62px;
`;

const KeywordSearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;

  .image-wrapper {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`;

const LocalSearchWrapper = styled(KeywordSearchWrapper).attrs(
  ({ onClick }) => ({ onClick })
)`
  border-radius: 0px;
  border-left: 0px;
  cursor: pointer;

  > p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.palette.gray5};
    min-width: 120px;
  }
  > p.selected {
    color: ${({ theme }) => theme.palette.black};
  }
`;

const StyledKeywordInput = styled.input.attrs(() => ({
  placeholder: "키워드를 입력해주세요"
}))`
  width: 100%;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0px;
`;

const StyledSearchButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-left: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 62px;
  background: ${({ theme }) => theme.palette.mainMauve};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

function SearchForm({ onOpen, selectedLocal }) {
  const { sido, sigugun } = selectedLocal;
  const localIsSelected = sido !== "" && sigugun !== "";

  return (
    <StyledSearchForm>
      <KeywordSearchWrapper>
        <div className="image-wrapper">
          <img src="/images/search.svg" alt="keyword search" />
        </div>
        <StyledKeywordInput />
      </KeywordSearchWrapper>
      <LocalSearchWrapper onClick={onOpen}>
        <div className="image-wrapper">
          <img src="/images/map.svg" alt="map marker" />
        </div>
        {localIsSelected ? (
          <p className="selected">{`${sido} ${sigugun}`}</p>
        ) : (
          <p>지역을 선택해주세요</p>
        )}
      </LocalSearchWrapper>
      <StyledSearchButton>검색</StyledSearchButton>
    </StyledSearchForm>
  );
}

export default SearchForm;
