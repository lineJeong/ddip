import { Fragment } from "react";

import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";

const StyledOverlayContent = styled.div`
  background: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.mainViolet};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
`;

const StyledOverlayTail = styled.div`
  position: relative;
  width: fit-content;
  border: 10px solid white;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  left: calc(50% - 10px);
`;

function MapSearchMarkers({
  markers,
  overlayMap,
  handleMouseOverMarker,
  handleMouseOutMarker
}) {
  return (
    <>
      {markers.map((marker) => {
        return (
          <Fragment key={marker.idx}>
            <MapMarker
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",
                size: { width: 36, height: 37 },
                options: {
                  spriteSize: { width: 36, height: 691 },
                  spriteOrigin: { x: 0, y: marker.idx * 46 + 10 },
                  offset: { x: 13, y: 37 }
                }
              }}
              position={marker.position}
              onMouseOver={() => handleMouseOverMarker(marker.idx)}
              onMouseOut={handleMouseOutMarker}
            ></MapMarker>
            {overlayMap === marker.idx && (
              <CustomOverlayMap
                position={marker.position}
                yAnchor={1.5}
                xAnchor={0.5}
              >
                <StyledOverlayContent>{marker.place}</StyledOverlayContent>
                <StyledOverlayTail></StyledOverlayTail>
              </CustomOverlayMap>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

export default MapSearchMarkers;
