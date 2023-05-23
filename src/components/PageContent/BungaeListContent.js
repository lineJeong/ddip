import styled from "styled-components";

import * as bungaeInfoUtils from "../../@utils/bungaeInfoUtils";
import BungaeCard from "../BungaeCard";

const StyledBungaeListContent = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;

    @media only screen and (max-width: 1254px) {
      max-width: 895px;
    }
    @media only screen and (max-width: 949px) {
      max-width: 590px;
    }
    @media only screen and (max-width: 644px) {
      max-width: 285px;
    }
  }
`;

const StyledPlaceholderCard = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 292px;
  border: 1px solid black;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.gray2};
`;

function BungaeListContent({ bungaeList }) {
  return (
    <StyledBungaeListContent>
      <ul>
        {bungaeList.map((item, idx) => {
          if (!item) {
            return (
              <StyledPlaceholderCard key={`placeholder-${idx}`}>
                조건을 충족하는 모집글이 없습니다.
              </StyledPlaceholderCard>
            );
          }

          const {
            id,
            owner,
            title,
            location,
            createdAt,
            meetingAt,
            numberOfParticipants,
            numberOfRecruits
          } = item;

          const status = bungaeInfoUtils.getBungaeStatus(createdAt, meetingAt);
          const place = location.city + " " + location.state;
          const time = bungaeInfoUtils.getMeetingTime(meetingAt);
          const duration = bungaeInfoUtils.getBungaeDuration(meetingAt);
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
        })}
      </ul>
    </StyledBungaeListContent>
  );
}

export default BungaeListContent;
