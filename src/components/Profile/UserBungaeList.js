import styled from "styled-components";

import * as bungaeCardUtil from "../../@utils/bungaeCard";
import BungaeCard from "../BungaeCard";
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
      <BungaeListContent>
        {bungaeList.map(
          ({
            id,
            owner,
            title,
            location,
            createdAt,
            meetingAt,
            numberOfParticipants,
            numberOfRecruits
          }) => {
            const status = bungaeCardUtil.getBungaeStatus(createdAt, meetingAt);
            const place = location.city + " " + location.state;
            const time = bungaeCardUtil.getMeetingTime(meetingAt);
            const duration = bungaeCardUtil.getBungaeDuration(meetingAt);
            return (
              <BungaeCard
                key={id}
                id={id}
                status={status}
                place={place}
                time={time}
                title={title}
                emoji={owner.emoji}
                nickname={owner.nickname}
                numberOfParticipants={numberOfParticipants}
                numberOfRecruits={numberOfRecruits}
                duration={duration}
              />
            );
          }
        )}
      </BungaeListContent>
    </StyledUserBungaeList>
  );
}

export default UserBungaeList;
