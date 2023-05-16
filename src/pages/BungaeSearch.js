import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

import { searchPageTabMenu as tabMenu } from "../@constants/constants";
import { dummyBungaeList } from "../@constants/dummy";
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
  const [localOptionsIsOpen, setLocalOptionsIsOpen] = useState(false);
  const [currentSido, setCurrentSido] = useState(0);
  const [currentSigugun, setCurrentSigugun] = useState(null);

  const [bungaeList, setBungaeList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const switchTabHandler = (selected) => {
    setSearchParams({ sort: selected });
  };

  const toggleLocalOptionsHandler = () => {
    setLocalOptionsIsOpen((prev) => !prev);
  };

  const selectSidoHandler = (idx, text) => {
    setCurrentSido(idx);
    setSelectedLocal({ sido: text, sigugun: "" });
    setCurrentSigugun((prev) => ({ ...prev, sigugun: null }));
  };
  const selectSigugunHandler = (idx, text) => {
    setCurrentSigugun(idx);
    setSelectedLocal((prev) => ({ ...prev, sigugun: text }));
  };

  const resetSelectionHandler = () => {
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
          onOpen={toggleLocalOptionsHandler}
          selectedLocal={selectedLocal}
        />
        <LocalOptions
          isOpen={localOptionsIsOpen}
          onClose={toggleLocalOptionsHandler}
          currentSido={currentSido}
          onSelectSido={selectSidoHandler}
          currentSigugun={currentSigugun}
          onSelectSigugun={selectSigugunHandler}
          onReset={resetSelectionHandler}
        />
      </StyledSection>
      <StyledSection>
        <SearchedBungaeList
          count={bungaeList.length}
          sortBy={sort}
          onSwitchTab={switchTabHandler}
          tabMenu={tabMenu}
          bungaeList={bungaeList}
        />
      </StyledSection>
    </RootPageContent>
  );
}

export default BungaeSearchPage;
