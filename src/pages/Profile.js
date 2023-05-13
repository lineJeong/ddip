import { useEffect, useState } from "react";

import { dummyBungaeList } from "../@constants/dummy";
import RootPageContent from "../components/PageContent/RootPageContent";
import UserBungaeList from "../components/Profile/UserBungaeList";
import UserInfo from "../components/Profile/UserInfo";

function ProfilePage() {
  const [bungaeList, setBungaeList] = useState([]);
  const [sortPathname, setSortPathname] = useState("/profile/created");
  const nickname = "닉네임입니다";

  const tabMenu = [
    {
      name: "내가 만든 번개",
      pathname: "/profile/created"
    },
    {
      name: "내가 참여한 번개",
      pathname: "/profile/participated"
    }
  ];

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const switchTab = (selected) => {
    setSortPathname(selected);
  };

  return (
    <RootPageContent>
      <UserInfo emoji="😶‍🌫️" nickname={nickname} email="test@test.com" />
      <UserBungaeList
        sortPathname={sortPathname}
        switchTab={switchTab}
        tabMenu={tabMenu}
        bungaeList={bungaeList}
      />
    </RootPageContent>
  );
}

export default ProfilePage;
