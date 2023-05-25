import styled from "styled-components";

const StyledLocationWrapper = styled.div`
  width: 100%;

  > .label-wrapper {
    margin-bottom: 6px;
  }
`;

const StyledLocationBox = styled.div`
  display: flex;
  align-items: center;
  height: 46px;

  > .location-display-box {
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
    > p.active {
      color: ${({ theme }) => theme.palette.black};
    }
  }
`;

const StyledLocationButton = styled.button.attrs(({ onClick }) => ({
  onClick
}))`
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

function MeetingLocation({ meetingLocation, handleOpenMap }) {
  return (
    <StyledLocationWrapper>
      <div className="label-wrapper">
        <span>모임 장소</span>
      </div>
      <StyledLocationBox>
        <div className="location-display-box">
          {!meetingLocation && <p>지도에서 장소를 지정해주세요</p>}
          {meetingLocation && <p className="active">{meetingLocation}</p>}
        </div>
        <StyledLocationButton onClick={handleOpenMap}>
          장소 지정하기
        </StyledLocationButton>
      </StyledLocationBox>
    </StyledLocationWrapper>
  );
}

export default MeetingLocation;
