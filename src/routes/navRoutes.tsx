export interface NavRoute {
  routeName: string;
  routeLink: string;
}

const navRoutes: NavRoute[] = [
  {
    routeName: "Home",
    routeLink: "/",
  },
  {
    routeName: "Headphones",
    routeLink: "/headphones",
  },
  {
    routeName: "Speakers",
    routeLink: "/speakers",
  },
  {
    routeName: "Earphones",
    routeLink: "/earphones",
  },
];

export default navRoutes;
