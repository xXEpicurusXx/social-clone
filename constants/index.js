export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/feed",
    label: "Home",
  },  
  {
      imgURL: "/assets/feed.png",
      route: "/",
      label: "Feed",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/heart.svg",
      route: "/activity",
      label: "Notifications",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Create Post",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/communities",
      label: "Recommended",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Posts", icon: "/assets/reply.svg" },
    { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Posts", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];