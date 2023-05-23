import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { dummyBungaeList } from "../@constants/dummy";
import { ProfilePageTabMenu as tabMenu } from "../@constants/sortTab";
import { useAuthActions, useAuthValue } from "../@store/use-auth";
import RootPageContent from "../components/PageContent/RootPageContent";
import UserBungaeList from "../components/Profile/UserBungaeList";
import UserInfo from "../components/Profile/UserInfo";

function ProfilePage() {
  const [bungaeList, setBungaeList] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { userInfo } = useAuthValue();
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

  if (!userInfo) return;

  return (
    <RootPageContent>
      <UserInfo
        emoji={userInfo.emoji}
        nickname={userInfo.nickname}
        email={userInfo.email}
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
