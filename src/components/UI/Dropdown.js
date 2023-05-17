import { forwardRef } from "react";

import styled, { css } from "styled-components";

const StyledDropdown = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  position: relative;

  > .label-wrapper {
    margin-bottom: 6px;
  }
  > .dropdown-wrapper {
    width: 100%;
  }
`;

const StyledDisplayBox = styled.div.attrs(({ onClick }) => ({ onClick }))`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      border: 2px solid ${({ theme }) => theme.palette.mainViolet};
    `}

  > p {
    padding: 0 14px;
    color: ${({ theme }) => theme.palette.gray4};
    ${({ isOpen }) =>
      isOpen &&
      css`
        padding: 0 13px;
      `}
  }
  > p.selected {
    color: ${({ theme }) => theme.palette.black};
  }
  > .image-wrapper {
    width: 40px;
    height: 32px;
    padding: 6px 14px;
    border-left: 1px solid black;
    ${({ isOpen }) =>
      isOpen &&
      css`
        width: 39px;
      `}
  }
`;

const StyledOptionList = styled.ul`
  margin-top: 6px;
  max-height: 182px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.palette.gray2};
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.white};
  position: absolute;
  z-index: 10;
  width: 100%;

  li {
    padding: 10px 14px;
    &:hover {
      background: ${({ theme }) => theme.palette.gray1};
    }
  }
  li.active {
    background: ${({ theme }) => theme.palette.mainMauve};
  }
`;

function Dropdown(
  { label = "라벨", isOpen, selected, onToggle, onSelect, options },
  ref
) {
  return (
    <StyledDropdown>
      <div className="label-wrapper">
        <label>{label}</label>
      </div>
      <div className="dropdown-wrapper" ref={ref}>
        <StyledDisplayBox
          isOpen={isOpen}
          role="presentation"
          onClick={onToggle}
        >
          <p className={selected.value ? "selected" : ""}>{selected.name}</p>
          <div className="image-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </div>
        </StyledDisplayBox>
        {isOpen && (
          <StyledOptionList>
            {options.map((option) => (
              <li
                key={option.name}
                role="presentation"
                className={selected.name === option.name ? "active" : ""}
                onClick={() => onSelect(option.name, option.value)}
              >
                {option.name}
              </li>
            ))}
          </StyledOptionList>
        )}
      </div>
    </StyledDropdown>
  );
}

export default forwardRef(Dropdown);
