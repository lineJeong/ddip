export const searchPageTabMenu = [
  {
    name: "최신순",
    sortBy: [null, "newest"],
    linkTo: "newest"
  },
  {
    name: "마감임박순",
    sortBy: ["last-minute"],
    linkTo: "last-minute"
  }
];

export const ProfilePageTabMenu = [
  {
    name: "내가 만든 번개",
    sortBy: ["/profile", "/profile/created"],
    linkTo: "/profile/created"
  },
  {
    name: "내가 참여한 번개",
    sortBy: ["/profile/participated"],
    linkTo: "/profile/participated"
  }
];
