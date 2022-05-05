import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    borderWidth: 3,
    borderColor: '#EDEFF7',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  darkRoot: {
    backgroundColor: colors.purple,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  gradientWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    padding: 12,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 16,
    color: '#53668E',
  },
  darkTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 16,
    color: colors.white,
  },
  number: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 16,
    // color: colors.purple,
    lineHeight: 24,
  },
  darkNumber: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: '#DDDAF1',
    lineHeight: 24,
  },
  measure: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
    // color: '#A274CD',
    marginLeft: 4,
    lineHeight: 22,
  },
  darkMeasure: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
    color: '#DDDAF1',
    marginLeft: 4,
    lineHeight: 22,
  },
});

export default styles;
