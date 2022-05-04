import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  appBarBg: {
    flex: 1,
    height: 132,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 44,
  },
  iconGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnAdd: {
    flex: 1,
    height: '100%',
    alignItems: 'center'
  }
});

export default styles;
