import { useState } from "react";

import styled from "styled-components";

import MeetingLocation from "./MeetingLocation";
import { numberOptionList, timeOptionList } from "../../@constants/dropdown";
import useDropdown from "../../@hooks/useDropdown";
import useInput from "../../@hooks/useInput";
import { getInitialBungaeState } from "../../@utils/bungaeInfo";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";
import InputWithLabel from "../UI/InputWithLabel";
import Textarea from "../UI/Textarea";

const StyledMarginWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const StyledDropdownContainer = styled(StyledMarginWrapper)`
  display: flex;
  gap: 20px;
`;
const StyledNarrowMarginWrapper = styled(StyledMarginWrapper)`
  margin-bottom: 14px;
`;

const StyledButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 10px;
`;

function CreateBungaeForm({ bungaeDetail, onSubmit }) {
  const {
    initialNumberOfRecruits,
    initialMeetingTime,
    initialMeetingLocation,
    initialOpenChat,
    initialIntroduction
  } = getInitialBungaeState(bungaeDetail);

  const {
    ref: numberDropdownRef,
    isOpen: numberDropdownIsOpen,
    selected: selectedNumberOption,
    onToggle: onToggleNumberDropdown,
    onSelect: onSelectNumberOption
  } = useDropdown(initialNumberOfRecruits);
  const {
    ref: timeDropdownRef,
    isOpen: timeDropdownIsOpen,
    selected: selectedTimeOption,
    onToggle: onToggleTimeDropdown,
    onSelect: onSelectTimeOption
  } = useDropdown(initialMeetingTime);

  const [meetingLocation] = useState(initialMeetingLocation);
  const { value: openChat, onChange: onChangeOpenChat } =
    useInput(initialOpenChat);
  const { value: introduction, onChange: onChangeIntroduction } =
    useInput(initialIntroduction);

  const bungaeSubmitHandler = () => {
    // 서버로 post(작성) 혹은 patch(수정) 요청
    onSubmit({});
    // 후에 detailPage로 이동
  };

  return (
    <>
      <StyledDropdownContainer>
        <Dropdown
          label="모집 인원"
          ref={numberDropdownRef}
          isOpen={numberDropdownIsOpen}
          selected={selectedNumberOption}
          onToggle={onToggleNumberDropdown}
          onSelect={onSelectNumberOption}
          options={numberOptionList}
        />
        <Dropdown
          label="모임 시간"
          ref={timeDropdownRef}
          isOpen={timeDropdownIsOpen}
          selected={selectedTimeOption}
          onToggle={onToggleTimeDropdown}
          onSelect={onSelectTimeOption}
          options={timeOptionList}
        />
      </StyledDropdownContainer>
      <StyledMarginWrapper>
        <MeetingLocation meetingLocation={meetingLocation} />
      </StyledMarginWrapper>
      <StyledMarginWrapper>
        <InputWithLabel
          label="카카오톡 오픈채팅"
          id="kakao-link"
          placeholder="오픈 카톡방 링크"
          fontSize="base"
          height="46px"
          value={openChat}
          onChange={onChangeOpenChat}
        />
      </StyledMarginWrapper>
      <StyledNarrowMarginWrapper>
        <InputWithLabel
          label="제목"
          id="create-bungae-title"
          name="title"
          placeholder="제목을 입력해주세요"
          fontSize="base"
          height="46px"
          value={introduction.title}
          onChange={onChangeIntroduction}
        />
      </StyledNarrowMarginWrapper>
      <StyledNarrowMarginWrapper>
        <Textarea
          name="description"
          placeholder="번개 모임에 대해 소개해주세요"
          height="340px"
          value={introduction.description}
          onChange={onChangeIntroduction}
        />
      </StyledNarrowMarginWrapper>
      <StyledButtonContainer>
        <Button background="white" outline>
          취소
        </Button>
        <Button
          background="mainViolet"
          color="white"
          onClick={bungaeSubmitHandler}
        >
          번개 등록
        </Button>
      </StyledButtonContainer>
    </>
  );
}

export default CreateBungaeForm;
