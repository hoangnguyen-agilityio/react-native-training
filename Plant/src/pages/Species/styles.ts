import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: 'space-between',
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
  list: {
    flex: 1,
    marginTop: 30,
  },
  sectionHeader: {
    marginBottom: 15,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.GREEN
  },
  sectionItem: {
    marginBottom: 15,
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: '#6A6F7D',
    textTransform: 'uppercase'
  }
});

export default styles;
