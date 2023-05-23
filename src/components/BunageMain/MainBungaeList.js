import styled from "styled-components";

import BungaeListContent from "../PageContent/BungaeListContent";
import SimplePagination from "../UI/SimplePagination";

const StyledUpperContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .en-heading {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.palette.mainNavy};
    margin-bottom: 12px;
  }
  .ko-heading {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

function NewBungaeList({ enHeading, koHeading, bungaeList }) {
  const filledBungaeList = [...bungaeList];

  while (filledBungaeList.length < 4) {
    filledBungaeList.push(null);
  }

  return (
    <>
      <StyledUpperContent>
        <div>
          <div className="en-heading">{enHeading}</div>
          <div className="ko-heading">{koHeading}</div>
        </div>
        <SimplePagination />
      </StyledUpperContent>
      <BungaeListContent bungaeList={filledBungaeList} />
    </>
  );
}

export default NewBungaeList;
