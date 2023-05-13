import { useEffect, useState } from "react";

import styled from "styled-components";

import { dummyBungaeList2 } from "../@constants/dummy";
import MainBungaeList from "../components/BunageMain/MainBungaeList";
import RootPageContent from "../components/PageContent/RootPageContent";

const StyledBungaeListSection = styled.section`
  & + & {
    margin-top: 40px;
  }
`;

function BungaeMainPage() {
  const [imminentBungaeList, setImminentBungaeList] = useState([]);
  const [newBungaeList, setNewBungaeList] = useState([]);

  useEffect(() => {
    setImminentBungaeList(dummyBungaeList2);
    setNewBungaeList(dummyBungaeList2);
  }, []);

  return (
    <RootPageContent>
      <StyledBungaeListSection>
        <MainBungaeList
          enHeading="CLOSING SOON"
          koHeading="마감 임박 번개"
          bungaeList={imminentBungaeList}
        />
      </StyledBungaeListSection>
      <StyledBungaeListSection>
        <MainBungaeList
          enHeading="REAL TIME"
          koHeading="실시간 최신 번개"
          bungaeList={newBungaeList}
        />
      </StyledBungaeListSection>
    </RootPageContent>
  );
}

export default BungaeMainPage;
