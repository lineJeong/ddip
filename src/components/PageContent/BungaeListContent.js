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

function BungaeListContent({ bungaeList }) {
  return (
    <StyledBungaeListContent>
      <ul>
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
            const status = bungaeInfoUtils.getBungaeStatus(
              createdAt,
              meetingAt
            );
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
          }
        )}
      </ul>
    </StyledBungaeListContent>
  );
}

export default BungaeListContent;
