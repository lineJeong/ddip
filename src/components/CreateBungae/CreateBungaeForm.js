import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import MeetingLocation from "./MeetingLocation";
import { numberOptionList, timeOptionList } from "../../@constants/dropdown";
import useDropdown from "../../@hooks/useDropdown";
import useInput from "../../@hooks/useInput";
import * as bungaeInfoUtil from "../../@utils/bungaeInfo";
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
  const navigate = useNavigate();
  // 작성자 본인이 아니면 튕겨내기 (url 경로 접속 막기)
  // bungaeDetail이 null이면 튕겨내기 (url 경로로 접속 시 bungaeDetail=null) or navigate로 state를 받아오는 대신 수정 페이지에서 서버 데이터 받아오기

  const {
    initialNumberOfRecruits,
    initialMeetingTime,
    initialMeetingLocation,
    initialOpenChat,
    initialIntroduction
  } = bungaeInfoUtil.getInitialBungaeState(bungaeDetail);

  const {
    ref: numberDropdownRef,
    isOpen: isNumberDropdownOpen,
    selected: selectedNumberOption,
    handleToggleDropdown: handleToggleNumberDropdown,
    handleSelectOption: handleSelectNumberOption
  } = useDropdown(initialNumberOfRecruits);
  const {
    ref: timeDropdownRef,
    isOpen: isTimeDropdownOpen,
    selected: selectedTimeOption,
    handleToggleDropdown: handleToggleTimeDropdown,
    handleSelectOption: handleSelectTimeOption
  } = useDropdown(initialMeetingTime);

  const [meetingLocation] = useState(initialMeetingLocation);
  const { value: openChat, handleChangeInput: handleChangeOpenChat } =
    useInput(initialOpenChat);
  const { value: introduction, handleChangeInput: handleChangeIntroduction } =
    useInput(initialIntroduction);

  const handleSubmitBungae = () => {
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
          isOpen={isNumberDropdownOpen}
          selected={selectedNumberOption}
          onToggle={handleToggleNumberDropdown}
          onSelect={handleSelectNumberOption}
          options={numberOptionList}
        />
        <Dropdown
          label="모임 시간"
          ref={timeDropdownRef}
          isOpen={isTimeDropdownOpen}
          selected={selectedTimeOption}
          onToggle={handleToggleTimeDropdown}
          onSelect={handleSelectTimeOption}
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
          onChange={handleChangeOpenChat}
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
          onChange={handleChangeIntroduction}
        />
      </StyledNarrowMarginWrapper>
      <StyledNarrowMarginWrapper>
        <Textarea
          name="description"
          placeholder="번개 모임에 대해 소개해주세요"
          height="340px"
          value={introduction.description}
          onChange={handleChangeIntroduction}
        />
      </StyledNarrowMarginWrapper>
      <StyledButtonContainer>
        <Button background="white" outline onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button
          background="mainViolet"
          color="white"
          onClick={handleSubmitBungae}
        >
          번개 등록
        </Button>
      </StyledButtonContainer>
    </>
  );
}

export default CreateBungaeForm;
