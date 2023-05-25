import { useRef, useState } from "react";

import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

import MapSearchList from "./MapSearchList";
import MapSearchMarkers from "./MapSearchMarkers";
import MapSearchPagination from "./MapSearchPagination";
import IconButton from "../UI/IconButton";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const { kakao } = window;

const StyledMapContainter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledCloseButton = styled.button.attrs(({ onClick }) => ({ onClick }))`
  position: absolute;
  z-index: 30;
  top: 6px;
  left: calc(100% - 32px);
  width: 28px;
  height: 28px;
  border: 0px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.mainViolet};
  color: ${({ theme }) => theme.palette.white};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const StyledMapSearchContainer = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  top: calc(60% - 20px);
  height: calc(40% + 20px);
  width: 100%;
  max-width: 400px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: ${({ theme }) => theme.palette.white};
  z-index: 30;
`;

const StyledMapSearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.white};
`;

function MapModal({ isMapOpen, handleCloseMap }) {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [keyword, setKeyWord] = useState("");
  const [pagination, setPagination] = useState({});
  const [center, setCenter] = useState({
    lat: 37.566769,
    lng: 126.978323
  });
  const [overlayMap, setOverlayMap] = useState(null);

  const ulRef = useRef(null);

  const handleChagneKeyword = (e) => {
    setKeyWord(e.target.value);
  };

  const handleClickList = (position) => {
    setCenter(position);
  };
  const handleMouseOverForOverlayMap = (idx) => {
    setOverlayMap(idx);
  };
  const handleMouseOutForOverlayMap = () => {
    setOverlayMap(null);
  };

  const handleClickPagination = (page) => {
    pagination.gotoPage(page);
    ulRef.current.scrollTo(0, 0);
  };

  const places = new kakao.maps.services.Places();
  // const geocoder = new kakao.maps.services.Geocoder();

  // const callback = (result, status) => {
  //   console.log(status, result);
  // };

  // const onClick = () => {
  //   geocoder.coord2Address(126.92289698417012, 35.11770328520885, callback);
  // };

  const displayPlaces = (data) => {
    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체
    const bounds = new kakao.maps.LatLngBounds();
    const markers = [];

    for (let i = 0; i < data.length; i++) {
      markers.push({
        position: {
          lat: data[i].y,
          lng: data[i].x
        },
        place: data[i].place_name,
        address: data[i].road_address_name,
        idx: i
      });

      const latLng = new kakao.maps.LatLng(data[i].y, data[i].x);
      // LatLngBounds 객체에 좌표를 추가
      bounds.extend(latLng);
    }
    setMarkers(markers);
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정
    map.setBounds(bounds);
  };

  const displayPagination = (pagination) => {
    const { ...rest } = pagination;
    const pages = [];
    for (let i = 1; i <= pagination.last; i++) {
      pages.push(i);
    }
    setPagination({ ...rest, pages });
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      displayPlaces(data);
      const { ...rest } = pagination;
      setPagination(rest);
      displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      window.alert("키워드를 입력해주세요.");
      return;
    }
    places.keywordSearch(keyword, placesSearchCB, { size: 10 });
  };

  return (
    <Modal isOpen={isMapOpen} onClose={handleCloseMap} mapModal>
      {/* <button onClick={onClick}>테스트 버튼</button> */}
      <StyledMapContainter>
        <Map
          center={center}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5px"
          }}
          level={9}
          onCreate={setMap}
        >
          <StyledCloseButton onClick={handleCloseMap}>
            &times;
          </StyledCloseButton>
          <StyledMapSearchContainer>
            <StyledMapSearchForm onSubmit={handleSubmitSearch}>
              <Input
                value={keyword}
                placeholder="장소를 입력해주세요"
                onChange={handleChagneKeyword}
              />
              <IconButton width="42px" height="42px" background="mainViolet">
                <img src="/images/search-white.svg" alt="search button" />
              </IconButton>
            </StyledMapSearchForm>
            <MapSearchList
              markers={markers}
              ref={ulRef}
              handleClickList={handleClickList}
              handleMouseOverList={handleMouseOverForOverlayMap}
              handleMouseOutList={handleMouseOutForOverlayMap}
            />
            <MapSearchPagination
              pagination={pagination}
              handleClickPagination={handleClickPagination}
            />
          </StyledMapSearchContainer>
          <MapSearchMarkers
            markers={markers}
            overlayMap={overlayMap}
            handleMouseOverMarker={handleMouseOverForOverlayMap}
            handleMouseOutMarker={handleMouseOutForOverlayMap}
          />
        </Map>
      </StyledMapContainter>
    </Modal>
  );
}

export default MapModal;
