import styled from "styled-components";

import { numberOptionList, timeOptionList } from "../@constants/dropdown";
import useDropdown from "../@hooks/useDropdown";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import Button from "../components/UI/Button";
import Dropdown from "../components/UI/Dropdown";
import InputWithLabel from "../components/UI/InputWithLabel";
import Textarea from "../components/UI/Textarea";

const StyledInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const StyledDropdownContainer = styled(StyledInputWrapper)`
  display: flex;
  gap: 20px;
`;
const StyledNarrowMarginWrapper = styled(StyledInputWrapper)`
  margin-bottom: 14px;
`;

const StyledAddressWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  > .label-wrapper {
    margin-bottom: 6px;
  }
`;

const StyledAddressBox = styled.div`
  display: flex;
  align-items: center;
  height: 46px;

  > .address-display-box {
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0px 14px;

    > p {
      color: ${({ theme }) => theme.palette.gray4};
    }
  }
`;

const StyledMapButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-left: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 120px;
  height: 100%;
  background: ${({ theme }) => theme.palette.mainMauve};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 10px;
`;

function CreateBungaePage() {
  const {
    ref: numberDropdownRef,
    isOpen: numberDropdownIsOpen,
    selected: selectedNumberOption,
    onToggle: onToggleNumberDropdown,
    onSelect: onSelectNumberOption
  } = useDropdown({ name: "1명 ~ 10명", value: null });
  const {
    ref: timeDropdownRef,
    isOpen: timeDropdownIsOpen,
    selected: selectedTimeOption,
    onToggle: onToggleTimeDropdown,
    onSelect: onSelectTimeOption
  } = useDropdown({ name: "00:30 ~ 23:30", value: null });

  return (
    <RootPageContent maxWidth="md">
      <HeadingPageContent heading="번개 모임 만들기">
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
        <StyledAddressWrapper>
          <div className="label-wrapper">
            <span>모임 장소</span>
          </div>
          <StyledAddressBox>
            <div className="address-display-box">
              <p>지도에서 장소를 지정해주세요</p>
            </div>
            <StyledMapButton>장소 지정하기</StyledMapButton>
          </StyledAddressBox>
        </StyledAddressWrapper>
        <StyledInputWrapper>
          <InputWithLabel
            label="카카오톡 오픈채팅"
            id="kakao-link"
            placeholder="오픈 카톡방 링크"
            fontSize="base"
            height="46px"
          />
        </StyledInputWrapper>
        <StyledNarrowMarginWrapper>
          <InputWithLabel
            label="제목"
            id="create-bungae-title"
            placeholder="제목을 입력해주세요"
            fontSize="base"
            height="46px"
          />
        </StyledNarrowMarginWrapper>
        <StyledNarrowMarginWrapper>
          <Textarea
            placeholder="번개 모임에 대해 소개해주세요"
            height="340px"
          />
        </StyledNarrowMarginWrapper>
        <StyledButtonContainer>
          <Button background="white" outline>
            취소
          </Button>
          <Button background="mainViolet" color="white">
            번개 등록
          </Button>
        </StyledButtonContainer>
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default CreateBungaePage;
