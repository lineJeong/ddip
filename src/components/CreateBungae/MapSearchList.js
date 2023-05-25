import { forwardRef } from "react";

import styled from "styled-components";

import * as mapUtils from "../../@utils/mapUtils";

const StyledMapSearchList = styled.ul.attrs(({ ref }) => ({ ref }))`
  margin: 8px 0px;
  overflow-y: auto;
  height: calc(100% - 20px - 42px - 20px); // - 패딩 - 검색창 - 페이지네이션
  background: ${({ theme }) => theme.palette.white};
`;

const StyledSearchListItem = styled.li`
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.palette.mainMauve};
  }
`;

const StyledMarkerAndPlaceContainer = styled.div.attrs(({ onClick }) => ({
  onClick
}))`
  display: flex;
  cursor: default;
`;

const StyledPlaceInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6px;
  padding-bottom: 6px;

  > .place-name {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
  > .place-address {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const StyledMarker = styled.span`
  width: 36px;
  height: 37px;
  margin: 6px 0 4px 6px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
    no-repeat;

  background-position: ${({ position }) => position};
`;

const StyledRegisterButton = styled.button`
  margin-left: 42px;
  color: ${({ theme }) => theme.palette.mainViolet};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 0px;
  text-decoration: underline;
`;

function MapSearchListItem(
  { markers, handleClickList, handleMouseOverList, handleMouseOutList },
  ref
) {
  return (
    <StyledMapSearchList ref={ref}>
      {markers.map((marker) => {
        const position = mapUtils.getBackgroundPosition(marker.idx);
        return (
          <StyledSearchListItem key={marker.idx}>
            <StyledMarkerAndPlaceContainer
              onClick={() => handleClickList(marker.position)}
              onMouseOver={() => handleMouseOverList(marker.idx)}
              onMouseOut={handleMouseOutList}
            >
              <StyledMarker position={position} />
              <StyledPlaceInfoContainer>
                <div className="place-name">{marker.place}</div>
                <div className="place-address">{marker.address}</div>
              </StyledPlaceInfoContainer>
            </StyledMarkerAndPlaceContainer>
            <StyledRegisterButton>등록하기</StyledRegisterButton>
          </StyledSearchListItem>
        );
      })}
    </StyledMapSearchList>
  );
}

export default forwardRef(MapSearchListItem);
