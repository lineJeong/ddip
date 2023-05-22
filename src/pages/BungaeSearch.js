import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

import { dummyBungaeList } from "../@constants/dummy";
import { searchPageTabMenu as tabMenu } from "../@constants/sortTab";
import LocalOptions from "../components/BungaeSearch/LocalOptions";
import SearchedBungaeList from "../components/BungaeSearch/SearchedBungaeList";
import SearchForm from "../components/BungaeSearch/SearchForm";
import RootPageContent from "../components/PageContent/RootPageContent";

const StyledSection = styled.section`
  width: 100%;
  & + & {
    margin-top: 40px;
  }
`;

function BungaeSearchPage() {
  const [selectedLocal, setSelectedLocal] = useState({
    sido: "",
    sigugun: ""
  });
  const [isLocalOptionsOpen, setIsLocalOptionsOpen] = useState(false);
  const [currentSido, setCurrentSido] = useState(0);
  const [currentSigugun, setCurrentSigugun] = useState(null);

  const [bungaeList, setBungaeList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const handleSwitchTab = (selected) => {
    setSearchParams({ sort: selected });
  };

  const handleToggleLocalOptions = () => {
    setIsLocalOptionsOpen((prev) => !prev);
  };

  const handleSelectSido = (idx, text) => {
    setCurrentSido(idx);
    setSelectedLocal({ sido: text, sigugun: "" });
    setCurrentSigugun(null);
  };
  const handleSelectSigugun = (idx, text) => {
    setCurrentSigugun(idx);
    setSelectedLocal((prev) => ({ ...prev, sigugun: text }));
  };

  const handleReset = () => {
    setCurrentSido(0);
    setCurrentSigugun(null);
    setSelectedLocal({
      sido: "",
      sigugun: ""
    });
  };

  return (
    <RootPageContent>
      <StyledSection>
        <SearchForm
          onOpen={handleToggleLocalOptions}
          selectedLocal={selectedLocal}
        />
        <LocalOptions
          isOpen={isLocalOptionsOpen}
          onClose={handleToggleLocalOptions}
          currentSido={currentSido}
          onSelectSido={handleSelectSido}
          currentSigugun={currentSigugun}
          onSelectSigugun={handleSelectSigugun}
          onReset={handleReset}
        />
      </StyledSection>
      <StyledSection>
        <SearchedBungaeList
          count={bungaeList.length}
          sortBy={sort}
          onSwitchTab={handleSwitchTab}
          tabMenu={tabMenu}
          bungaeList={bungaeList}
        />
      </StyledSection>
    </RootPageContent>
  );
}

export default BungaeSearchPage;
