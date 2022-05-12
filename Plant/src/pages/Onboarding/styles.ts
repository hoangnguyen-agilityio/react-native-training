import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  illustratorWrapper: {
    position: 'relative',
  },
  mainIllustrator: {},
  leftIllustrator: {
    position: 'absolute',
    top: 0,
    left: -30,
    width: 116,
    height: 83,
  },
  rightIllustrator: {
    position: 'absolute',
    top: 0,
    right: -30,
    width: 116,
    height: 83,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 19,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 24,
    color: COLORS.CHARCOAL,
  },
  desc: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'center',
    color: COLORS.NICKEL,
    opacity: 0.8,
  },
});

export default styles;
