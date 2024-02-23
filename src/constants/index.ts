export const SidebarLinks = [
  {
    icon: "/assets/Home.svg",
    title: "Scroll",
  },
  {
    icon: "/assets/Projects.svg",
    title: "Projects",
  },
  {
    icon: "/assets/Inbox.svg",
    title: "Inbox",
  },
  {
    icon: "/assets/Jobs.svg",
    title: "Jobs",
  },
  {
    icon: "/assets/Search.svg",
    title: "Search",
  },
  {
    icon: "/assets/Network.svg",
    title: "My Network",
  },
];

export const CandidatesColumnStyleConfig: Record<
  string,
  Record<string, string>
> = {
  rejected: {
    icon: "/assets/Rejected Icon.svg",
    bgColor: "#FFEAEA",
    color: "#EB5757",
    count: "1",
    parentBorderColor: "#FFEAEA",
  },
  applied: {
    bgColor: "#E1E4E8",
    color: "#0D0D0D",
    count: "142",
    parentBorderColor: "#E1E4E8",
  },
  shortlisted: {
    icon: "/assets/Accepted Icon.svg",
    bgColor: "#E2F5EA",
    color: "#219653",
    count: "24",
    parentBorderColor: "#E2F5EA",
  },
};
