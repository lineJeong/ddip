import styled from "styled-components";

import BungaeListContent from "../PageContent/BungaeListContent";
import SortTab from "../UI/SortTab";

const StyledUserBungaeList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UserBungaeList({ sortPathname, switchTab, tabMenu, bungaeList }) {
  return (
    <StyledUserBungaeList>
      <SortTab
        sortPathname={sortPathname}
        switchTab={switchTab}
        tabMenu={tabMenu}
      />
      <BungaeListContent bungaeList={bungaeList} />
    </StyledUserBungaeList>
  );
}

export default UserBungaeList;
