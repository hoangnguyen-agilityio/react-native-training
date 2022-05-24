export const NAVIGATION_LIST: {
  page: keyof NavigationListType;
  title?: string;
}[] = [
  {
    page: 'Home',
  },
  {
    page: 'SignIn',
  },
  {
    page: 'Species',
  },
  {
    page: 'Plants',
  },
  {
    page: 'PlantDetail',
  },
  {
    page: 'Articles',
  },
];

export type NavigationListType = {
  Home: undefined;
  SignIn: undefined;
  Species: undefined;
  Plants: undefined;
  PlantDetail: undefined;
  Articles: undefined;
};
