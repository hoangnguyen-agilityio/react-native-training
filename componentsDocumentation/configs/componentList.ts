export const COMPONENT_LIST: { id: string; title: string; page: keyof ComponentListType }[] = [
  {
    id: '1',
    title: 'Indicator',
    page: 'Indicator',
  },
  {
    id: '2',
    title: 'Buttons',
    page: 'Buttons',
  },
  {
    id: '3',
    title: 'Lists',
    page: 'Lists',
  },
  {
    id: '4',
    title: 'Views',
    page: 'Views',
  },
  {
    id: '5',
    title: 'Modal',
    page: 'Modal',
  },
  {
    id: '6',
    title: 'StatusBar',
    page: 'StatusBar',
  },
  {
    id: '7',
    title: 'Switch',
    page: 'Switch',
  },
  {
    id: '8',
    title: 'TextInput',
    page: 'TextInput',
  },
  {
    id: '9',
    title: 'Touchable',
    page: 'Touchable',
  },
];

export type ComponentListType = {
  Indicator: { name: string };
  Buttons: { name: string };
  Lists: { name: string };
  Views: { name: string };
  Modal: { name: string };
  StatusBar: { name: string };
  Switch: { name: string };
  TextInput: { name: string };
  Touchable: { name: string };
  Home: undefined;
};
