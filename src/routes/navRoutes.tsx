export interface navRoute {
  routeName: string;
  routeLink: string;
}

const navRoutes: navRoute[] = [
  {
    routeName: "Home",
    routeLink: "/",
  },
  {
    routeName: "Headphones",
    routeLink: "/headphones",
  },
  {
    routeName: "Earphones",
    routeLink: "/earphones",
  },
  {
    routeName: "Speakers",
    routeLink: "/speakers",
  },
];

export default navRoutes;
