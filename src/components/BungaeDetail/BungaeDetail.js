import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import * as bungaeInfoUtil from "../../@utils/bungaeInfo";
import Button from "../UI/Button";

const StyledBungaeHeader = styled.section`
  width: 100%;
  margin-bottom: 30px;

  > .bungae-title {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 24px;
    line-height: 1.3;
  }
`;

const StyledUnderscoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.gray2};

  > .bungae-owner-and-ago {
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${({ theme }) => theme.palette.gray5};

    > .bungae-owner {
      padding-right: 16px;
      border-right: 2px solid ${({ theme }) => theme.palette.gray2};
      color: ${({ theme }) => theme.palette.black};
    }
  }

  > .bungae-edit-and-delete {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.palette.mainNavy};
  }
`;

const StyledBungaeInfoContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const StyledBungaeInfoContentWrapper = styled.li`
  display: flex;
  gap: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  > .bungae-content-title {
    color: ${({ theme }) => theme.palette.gray5};
  }

  > a {
    color: ${({ theme }) => theme.palette.mainNavy};
    text-decoration: underline;
  }
`;

const StyledButtonWrapper = styled.div`
  align-self: flex-start;
  margin-top: 20px;
`;

const StyledIntroductionContent = styled.section`
  width: 100%;
  margin-top: 40px;

  > .bungae-introduction-title {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding-bottom: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.gray2};
    margin-bottom: 30px;
  }
  > .bungae-introduction-description {
    line-height: 1.3;
  }
`;

function BungaeDetail({ bungaeDetail }) {
  const navigate = useNavigate();

  const {
    id,
    title,
    owner,
    location,
    createdAt,
    meetingAt,
    openChat,
    numberOfParticipants,
    numberOfRecruits,
    description
  } = bungaeDetail;

  const meetingLoacation = bungaeInfoUtil.getMeetingLocation(location);
  const meetingTime = bungaeInfoUtil.getMeetingTime(meetingAt);
  const createdDate = bungaeInfoUtil.getCreatedDate(createdAt);

  const handleClickEdit = () => {
    navigate(`/bungae/${id}/edit`, { state: { ...bungaeDetail } });
  };

  return (
    <>
      <StyledBungaeHeader>
        <div className="bungae-title">{title}</div>
        <StyledUnderscoreContainer>
          <div className="bungae-owner-and-ago">
            <div className="bungae-owner">
              {owner.emoji} {owner.nickname}
            </div>
            <div>{createdDate}</div>
          </div>
          <div className="bungae-edit-and-delete">
            <Button color="mainNavy" basic onClick={handleClickEdit}>
              수정
            </Button>
            <Button color="mainNavy" basic>
              삭제
            </Button>
          </div>
        </StyledUnderscoreContainer>
      </StyledBungaeHeader>
      <StyledBungaeInfoContainer>
        <StyledBungaeInfoContentWrapper>
          <div className="bungae-content-title">모임 장소</div>
          <div>{meetingLoacation}</div>
        </StyledBungaeInfoContentWrapper>
        <StyledBungaeInfoContentWrapper>
          <div className="bungae-content-title">모임 시간</div>
          <div>{meetingTime}</div>
        </StyledBungaeInfoContentWrapper>
        <StyledBungaeInfoContentWrapper>
          <div className="bungae-content-title">연락 방법</div>
          <a href={openChat} target="_blank" rel="noopener noreferrer">
            카카오톡 오픈채팅
          </a>
        </StyledBungaeInfoContentWrapper>
        <StyledBungaeInfoContentWrapper>
          <div className="bungae-content-title">모집 현황</div>
          <div>{`${numberOfParticipants} / ${numberOfRecruits}`}</div>
        </StyledBungaeInfoContentWrapper>
      </StyledBungaeInfoContainer>
      <StyledButtonWrapper>
        <Button background="mainViolet" color="white" size="md">
          번개 참가하기
        </Button>
      </StyledButtonWrapper>
      <StyledIntroductionContent>
        <div className="bungae-introduction-title">[ 번개 소개 ]</div>
        <div className="bungae-introduction-description">{description}</div>
      </StyledIntroductionContent>
    </>
  );
}

export default BungaeDetail;
