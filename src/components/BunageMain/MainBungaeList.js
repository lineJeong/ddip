import styled from "styled-components";

import * as bungaeCardUtil from "../../@utils/bungaeCard";
import BungaeCard from "../BungaeCard";
import BungaeListContent from "../PageContent/BungaeListContent";
import SimplePagination from "../UI/SimplePagination";

const StyledUpperContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .en-heading {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.palette.mainNavy};
    margin-bottom: 12px;
  }
  .ko-heading {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

function NewBungaeList({ enHeading, koHeading, bungaeList }) {
  return (
    <>
      <StyledUpperContent>
        <div>
          <div className="en-heading">{enHeading}</div>
          <div className="ko-heading">{koHeading}</div>
        </div>
        <SimplePagination />
      </StyledUpperContent>
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
    </>
  );
}

export default NewBungaeList;
