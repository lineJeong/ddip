import styled from "styled-components";

import BungaeListContent from "../PageContent/BungaeListContent";
import SortTab from "../UI/SortTab";

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

function SearchedBungaeList({
  count,
  sortBy,
  onSwitchTab,
  tabMenu,
  bungaeList
}) {
  return (
    <section>
      <StyledHeadingWrapper>
        <h1>{`번개 검색 결과 (${count})`}</h1>
        <SortTab sortBy={sortBy} onSwitch={onSwitchTab} tabMenu={tabMenu} />
      </StyledHeadingWrapper>
      <BungaeListContent bungaeList={bungaeList} />
    </section>
  );
}

export default SearchedBungaeList;
