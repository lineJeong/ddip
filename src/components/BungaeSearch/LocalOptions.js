import styled from "styled-components";

import { localList } from "../../@constants/localList";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 24px;
`;

const SyledLocalListWrapper = styled.div`
  display: flex;

  .list-title {
    text-align: left;
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledSidoList = styled.ul`
  width: 160px;
  height: 140px;
  overflow-y: scroll;
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;

  > li {
    padding: 8px 20px;
  }
  > li.active {
    background: ${({ theme }) => theme.palette.mainMauve};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

const SyledSigugunList = styled(StyledSidoList)`
  border-left: 0px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

function LocalOptions({
  isOpen,
  onClose,
  currentSido,
  onSelectSido,
  currentSigugun,
  onSelectSigugun,
  onReset
}) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
        <StyledHeader>지역 선택</StyledHeader>
        <SyledLocalListWrapper>
          <div>
            <div className="list-title">시·도</div>
            <StyledSidoList>
              {localList.map(({ sido }, idx) => (
                <li
                  key={idx}
                  role="menuitem"
                  className={idx === currentSido ? "active" : ""}
                  onClick={() => onSelectSido(idx, sido)}
                >
                  {sido}
                </li>
              ))}
            </StyledSidoList>
          </div>
          <div>
            <div className="list-title">시·구·군</div>
            <SyledSigugunList>
              {localList[currentSido].sigugun.map((el, idx) => (
                <li
                  key={idx}
                  role="menuitem"
                  className={idx === currentSigugun ? "active" : ""}
                  onClick={() => onSelectSigugun(idx, el)}
                >
                  {el}
                </li>
              ))}
            </SyledSigugunList>
          </div>
        </SyledLocalListWrapper>
        <StyledButtonContainer>
          <Button background="gray3" color="white" fullWidth onClick={onReset}>
            초기화
          </Button>
          <Button
            background="mainViolet"
            color="white"
            fullWidth
            onClick={onClose}
          >
            확인
          </Button>
        </StyledButtonContainer>
      </>
    </Modal>
  );
}

export default LocalOptions;
