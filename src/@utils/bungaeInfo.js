import { bungaeStatus } from "../@constants/bungaeStatus";
import { numberOptionList, timeOptionList } from "../@constants/dropdown";

export const getMeetingTime = (meetingAt) => {
  const meetingDate = new Date(meetingAt);
  const hours = String(meetingDate.getHours()).padStart(2, "0");
  const minutes = String(meetingDate.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const getDuration = (dateString) => {
  const currentDate = new Date();
  const comparedDate = new Date(dateString);
  const duration = comparedDate.getTime() - currentDate.getTime();
  return duration;
};

export const getBungaeDuration = (meetingAt) => {
  const duration = getDuration(meetingAt);

  if (duration <= 0) {
    return "00:00:00";
  }

  const secInMs = Math.floor(duration / 1000);
  const minInMs = Math.floor(secInMs / 60);
  const hourInMs = Math.floor(minInMs / 60);

  const seconds = String(secInMs % 60).padStart(2, "0");
  const minutes = String(minInMs % 60).padStart(2, "0");
  const hours = String(hourInMs % 24).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const getBungaeStatus = (createdAt, meetingAt) => {
  const durationForCreatedAt = getDuration(createdAt);
  const durationForMeetingAt = getDuration(meetingAt);
  const anHourToMs = 3600000;

  if (durationForMeetingAt <= 0) {
    return bungaeStatus.closed; // 모집완료
  }
  if (Math.abs(durationForCreatedAt) < anHourToMs) {
    return bungaeStatus.new; // NEW
  } else if (durationForMeetingAt < anHourToMs) {
    return bungaeStatus.imminent; // 마감임박
  }
  return bungaeStatus.recruiting; // 모집중
};

export const getInitialBungaeState = (bungaeDetail) => {
  let initialNumberOfRecruits = { name: "1명 ~ 10명", value: null };
  let initialMeetingTime = { name: "00:30 ~ 23:30", value: null };
  let initialMeetingLocation = null;
  let initialOpenChat = "";
  let initialIntroduction = { title: "", description: "" };

  if (bungaeDetail) {
    initialNumberOfRecruits = numberOptionList.find(
      ({ value }) => value === bungaeDetail.numberOfRecruits
    );
    initialMeetingTime = timeOptionList.find(
      ({ value }) => value === getMeetingTime(bungaeDetail.meetingAt)
    );
    initialMeetingLocation = `${bungaeDetail.location.city} ${bungaeDetail.location.state} ${bungaeDetail.location.street} ${bungaeDetail.location.zipCode} ${bungaeDetail.location.detail}`;
    initialOpenChat = bungaeDetail.openChat;
    initialIntroduction = {
      title: bungaeDetail.title,
      description: bungaeDetail.description
    };
  }

  return {
    initialNumberOfRecruits,
    initialMeetingTime,
    initialMeetingLocation,
    initialOpenChat,
    initialIntroduction
  };
};