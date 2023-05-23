import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { dummyBungaeList } from "../@constants/dummy";
import { ProfilePageTabMenu as tabMenu } from "../@constants/sortTab";
import { useAuthActions } from "../@store/use-auth";
import RootPageContent from "../components/PageContent/RootPageContent";
import UserBungaeList from "../components/Profile/UserBungaeList";
import UserInfo from "../components/Profile/UserInfo";

function ProfilePage() {
  const [bungaeList, setBungaeList] = useState([]);
  const nickname = "닉네임입니다";
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const authActions = useAuthActions();

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const handleSwitchTab = (selected) => {
    navigate(selected);
  };

  const handleSubmitLogout = () => {
    authActions.logout();
  };

  return (
    <RootPageContent>
      <UserInfo
        emoji="😶‍🌫️"
        nickname={nickname}
        email="test@test.com"
        handleSubmitLogout={handleSubmitLogout}
      />
      <UserBungaeList
        sortBy={pathname}
        onSwitchTab={handleSwitchTab}
        tabMenu={tabMenu}
        bungaeList={bungaeList}
      />
    </RootPageContent>
  );
}

export default ProfilePage;
