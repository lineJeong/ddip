import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const StyledBungaeCard = styled.li`
  width: 285px;
  height: 292px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background: {(props) => props.theme.palette.white};
  border: 1px solid black;
  border-radius: 5px;
  padding: 26px 20px;
  
  ${(props) =>
    props.statusText === "모집마감" &&
    css`
      background: ${(props) => props.theme.palette.gray2};
    `}

  p {
    display: inline-box;
  }

  > .status {
    color: ${({ theme, statusColor }) => theme.palette[statusColor]};
    font-size: 0.875rem;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: 14px;
  }

  > .place, .time {
    color:  ${(props) => props.theme.palette.gray4};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    p:first-child {
      margin-right: 8px;
    }
  }
  > .place {
    margin-bottom: 8px;
  }
  > .time {
    margin-bottom: 14px;
  }
  
  > h1 {
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: 12px;
    line-height: 1.375rem;
    height: 44px;
    ${(props) =>
      props.statusText === "모집마감" &&
      css`
        color: ${({ theme, statusColor }) => theme.palette[statusColor]};
      `}
  }

  > .bungaeInfo-nickname-numbers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 0.875rem;

    > .nickname, .numbers {
      span:last-child {
        margin-left: 4px;
      }
    }
    > .numbers {
     display: inline-flex;
     align-items: center; 
    }
    > .nickname {
    color:  ${(props) => props.theme.palette.gray4};
  }
}

  > .duration {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    text-align: center;
    > div {
      color: ${(props) => props.theme.palette.mainViolet};
      font-size: ${(props) => props.theme.fontSize["4xl"]};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      margin-top: 10px;
      ${(props) =>
        props.statusText === "모집마감" &&
        css`
          color: ${({ theme, statusColor }) => theme.palette[statusColor]};
        `}
    }
  }
`;

function BungaeCard({
  status,
  place,
  time,
  title,
  imoji,
  nickname,
  numberOfParticipants,
  numberOfRecruits,
  duration
}) {
  return (
    <Link>
      <StyledBungaeCard statusColor={status.color} statusText={status.text}>
        <div className="status">{status.text}</div>
        <div className="place">
          <p>장소 |</p>
          <p>{place}</p>
        </div>
        <div className="time">
          <p>시간 |</p>
          <p>{time}</p>
        </div>
        <h1>{title}</h1>
        <div className="bungaeInfo-nickname-numbers">
          <div className="nickname">
            <span>{imoji}</span>
            <span>{nickname}</span>
          </div>
          <div className="numbers">
            <img src="/images/recruit.svg" alt="recruit" />
            <span>{`${numberOfParticipants}/${numberOfRecruits}`}</span>
          </div>
        </div>
        <div className="duration">
          <p>번개 마감까지</p>
          <div>{duration}</div>
        </div>
      </StyledBungaeCard>
    </Link>
  );
}

export default BungaeCard;
