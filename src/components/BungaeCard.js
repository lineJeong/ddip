import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import * as bungaeInfoUtils from "../@utils/bungaeInfoUtils";

const StyledBungaeCard = styled.li`
  width: 285px;
  height: 292px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid black;
  border-radius: 5px;
  padding: 26px 20px;

  ${({ statusText }) =>
    statusText === "모집마감" &&
    css`
      background: ${({ theme }) => theme.palette.gray2};
    `}

  p {
    display: inline-box;
  }

  > .status {
    color: ${({ theme, statusColor }) => theme.palette[statusColor]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 14px;
  }

  > .place,
  .time {
    color: ${({ theme }) => theme.palette.gray4};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
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
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 12px;
    line-height: 1.375rem;
    height: 44px;
    ${({ statusText }) =>
      statusText === "모집마감" &&
      css`
        color: ${({ theme, statusColor }) => theme.palette[statusColor]};
      `}
  }

  > .bungaeInfo-nickname-numbers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.xs};

    > .nickname,
    .numbers {
      span:last-child {
        margin-left: 4px;
      }
    }
    > .numbers {
      display: inline-flex;
      align-items: center;
      > .icon {
        width: 14px;
        height: 14px;
      }
    }
    > .nickname {
      color: ${({ theme }) => theme.palette.gray4};
    }
  }

  > .duration {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: center;
    > div {
      color: ${({ theme }) => theme.palette.mainViolet};
      font-size: ${({ theme }) => theme.fontSize["4xl"]};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-top: 10px;
      ${({ statusText }) =>
        statusText === "모집마감" &&
        css`
          color: ${({ theme, statusColor }) => theme.palette[statusColor]};
        `}
    }
  }
`;

function BungaeCard({
  id,
  status,
  place,
  time,
  title,
  emoji,
  nickname,
  numberOfParticipants = 0,
  numberOfRecruits = 0,
  meetingAt
}) {
  const [duration, setDuration] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const newDuration = bungaeInfoUtils.getBungaeDuration(
        meetingAt,
        interval
      );
      console.log("test");
      setDuration(newDuration);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration, meetingAt]);

  return (
    <Link to={`/bungae/${id}`}>
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
            <span>{emoji}</span>
            <span>{nickname}</span>
          </div>
          <div className="numbers">
            <div className="icon">
              <img src="/images/recruit.svg" alt="recruit" />
            </div>
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
