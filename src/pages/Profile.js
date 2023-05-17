import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { dummyBungaeList } from "../@constants/dummy";
import { ProfilePageTabMenu as tabMenu } from "../@constants/sortTab";
import RootPageContent from "../components/PageContent/RootPageContent";
import UserBungaeList from "../components/Profile/UserBungaeList";
import UserInfo from "../components/Profile/UserInfo";

function ProfilePage() {
  const [bungaeList, setBungaeList] = useState([]);
  const nickname = "닉네임입니다";
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const switchTabHandler = (selected) => {
    navigate(selected);
  };

  return (
    <RootPageContent>
      <UserInfo emoji="😶‍🌫️" nickname={nickname} email="test@test.com" />
      <UserBungaeList
        sortBy={pathname}
        onSwitchTab={switchTabHandler}
        tabMenu={tabMenu}
        bungaeList={bungaeList}
      />
    </RootPageContent>
  );
}

export default ProfilePage;
