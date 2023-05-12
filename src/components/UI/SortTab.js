import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledSortTab = styled.div`
  display: flex;
  margin-bottom: 24px;

  .user-tab {
    padding: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
  .underscore {
    height: 3px;
    border: 1.5px solid black;
    margin: 0rem 0.5rem;
  }
`;

function SortTab({ sortParams, switchTab, tabMenu }) {
  return (
    <StyledSortTab>
      {tabMenu.map((menu) => (
        <Link
          to={menu.linkTo}
          key={menu.name}
          onClick={() => switchTab(menu.params)}
        >
          <div className="user-tab">
            <div>{menu.name}</div>
          </div>
          {menu.params === sortParams && <div className="underscore"></div>}
        </Link>
      ))}
    </StyledSortTab>
  );
}

export default SortTab;
