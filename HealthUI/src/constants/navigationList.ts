export const NAVIGATION_LIST: {
  page: keyof NavigationListType;
  title?: string;
}[] = [
  {
    page: 'Home',
  },
  {
    page: 'Onboarding',
  },
  {
    title: 'Calories',
    page: 'Calories',
  },
];

export type NavigationListType = {
  Home: undefined;
  Onboarding: undefined;
  Calories: { title: string };
};
