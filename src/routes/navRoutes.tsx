export interface NavRoute {
  routeName: string;
  routeLink: string;
  routeImage?: string;
}

const navRoutes: NavRoute[] = [
  {
    routeName: "Home",
    routeLink: "/",
  },
  {
    routeName: "Headphones",
    routeLink: "/headphones",
    routeImage:
      "starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    routeName: "Speakers",
    routeLink: "/speakers",
    routeImage:
      "starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    routeName: "Earphones",
    routeLink: "/earphones",
    routeImage:
      "starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

export default navRoutes;
