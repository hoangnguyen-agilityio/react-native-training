export const NAVIGATION_LIST: {
  page: keyof NavigationListType;
  title?: string;
}[] = [
  {
    page: 'Home',
  },
  {
    page: 'SignUp',
  },
];

export type NavigationListType = {
  Home: undefined;
  SignUp: undefined;
};
