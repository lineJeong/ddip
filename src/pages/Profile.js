import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { dummyBungaeList } from "../@constants/dummy";
import UserBungaeList from "../components/Profile/UserBungaeList";
import UserInfo from "../components/Profile/UserInfo";

function ProfilePage() {
  const [bungaeList, setBungaeList] = useState([]);
  const { sort } = useParams();
  const [sortParams, setSortParams] = useState(sort || "created");
  const nickname = "닉네임입니다";

  const tabMenu = [
    {
      name: "내가 만든 번개",
      params: "created",
      linkTo: `/profile/${nickname}/created`
    },
    {
      name: "내가 참여한 번개",
      params: "participated",
      linkTo: `/profile/${nickname}/participated`
    }
  ];

  useEffect(() => {
    setBungaeList(dummyBungaeList);
  }, []);

  const switchTab = (selected) => {
    setSortParams(selected);
  };

  return (
    <>
      <UserInfo emoji="😶‍🌫️" nickname={nickname} email="test@test.com" />
      <UserBungaeList
        sortParams={sortParams}
        switchTab={switchTab}
        tabMenu={tabMenu}
        bungaeList={bungaeList}
      />
    </>
  );
}

export default ProfilePage;
