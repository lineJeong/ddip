import styled from "styled-components";

import BungaeListContent from "../PageContent/BungaeListContent";
import SortTab from "../UI/SortTab";

const StyledUserBungaeList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > .margin-wrapper {
    margin-bottom: 24px;
  }
`;

function UserBungaeList({ sortBy, onSwitchTab, tabMenu, bungaeList }) {
  return (
    <StyledUserBungaeList>
      <div className="margin-wrapper">
        <SortTab sortBy={sortBy} onSwitch={onSwitchTab} tabMenu={tabMenu} />
      </div>
      <BungaeListContent bungaeList={bungaeList} />
    </StyledUserBungaeList>
  );
}

export default UserBungaeList;
