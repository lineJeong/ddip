import { bungaeStatus } from "../@constants/bungaeStatus";
import { numberOptionList, timeOptionList } from "../@constants/dropdown";

const padStartWithZero = (number) => {
  return String(number).padStart(2, "0");
};

export const getMeetingTime = (meetingAt) => {
  const meetingDate = new Date(meetingAt);
  const hours = padStartWithZero(meetingDate.getHours());
  const minutes = padStartWithZero(meetingDate.getMinutes());
  return `${hours}:${minutes}`;
};

const getDuration = (meetingAt) => {
  const currentDate = new Date();
  const comparedDate = new Date(meetingAt);
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

  const seconds = padStartWithZero(secInMs % 60);
  const minutes = padStartWithZero(minInMs % 60);
  const hours = padStartWithZero(hourInMs % 24);

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

export const getMeetingLocation = (location) => {
  return `${location.city} ${location.state} ${location.street} ${location.zipCode} ${location.detail}`;
};

export const getInitialBungaeState = (bungaeDetail) => {
  let initialNumberOfRecruits = { name: "1명 ~ 10명", value: null };
  let initialMeetingTime = { name: "00:30 ~ 23:30", value: null };
  let initialMeetingLocation = null;
  let initialOpenChat = "";
  let initialIntroduction = { title: "", description: "" };

  if (bungaeDetail) {
    const {
      numberOfRecruits,
      meetingAt,
      location,
      openChat,
      title,
      description
    } = bungaeDetail;

    initialNumberOfRecruits = numberOptionList.find(
      ({ value }) => value === numberOfRecruits
    );
    initialMeetingTime = timeOptionList.find(
      ({ name }) => name === getMeetingTime(meetingAt)
    );
    initialMeetingLocation = getMeetingLocation(location);
    initialOpenChat = openChat;
    initialIntroduction = {
      title: title,
      description: description
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

export const getCurrentDate = (isoDateString) => {
  const date = isoDateString ? new Date(isoDateString) : new Date();
  const year = date.getFullYear();
  const month = padStartWithZero(date.getMonth() + 1);
  const day = padStartWithZero(date.getDate());

  return `${year}-${month}-${day}`;
};

export const getCombinedDateTimeString = (time) => {
  const currentDate = getCurrentDate();
  return `${currentDate}T${time}`;
};

export const getFormattedCreationDate = (createdAt) => {
  return getCurrentDate(createdAt);
};
