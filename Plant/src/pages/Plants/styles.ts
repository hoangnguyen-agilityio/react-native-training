import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 30,
    lineHeight: 36,
    color: COLORS.WHITE,
  },
  main: {
    flex: 1,
  },
});

export default styles;
