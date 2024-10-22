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
    routeName: "Earphones",
    routeLink: "/earphones",
  },
  {
    routeName: "Speakers",
    routeLink: "/speakers",
  },
];

export default navRoutes;
