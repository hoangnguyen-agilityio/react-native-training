import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 140,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 120,
  },
  col: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 10,
    lineHeight: 10,
    marginTop: 10,

  }
});

export default styles;
