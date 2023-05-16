import styled from "styled-components";

const StyledSortTab = styled.ul`
  display: flex;

  > li {
    cursor: pointer;
  }

  .tab-menu {
    padding: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
  .underscore {
    height: 3px;
    border: 1.5px solid black;
    margin: 0rem 0.5rem;
  }
`;

function SortTab({ sortBy, onSwitch, tabMenu }) {
  return (
    <StyledSortTab>
      {tabMenu.map((menu) => (
        <li
          role="menuitem"
          key={menu.name}
          onClick={() => onSwitch(menu.linkTo)}
        >
          <div className="tab-menu">
            <div>{menu.name}</div>
          </div>
          {menu.sortBy.includes(sortBy) && <div className="underscore"></div>}
        </li>
      ))}
    </StyledSortTab>
  );
}

export default SortTab;
