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
];

export type NavigationListType = {
  Home: undefined;
  SignIn: undefined;
  Species: undefined;
};
