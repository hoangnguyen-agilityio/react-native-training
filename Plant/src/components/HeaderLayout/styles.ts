import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 180,
  },
  bg: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  firstEllipse: {
    position: 'absolute',
    right: -35,
    top: -85,
    width: 205,
    height: 205,
    backgroundColor: COLORS.WHITE,
    opacity: 0.15,
    borderRadius: 999,
  },
  secondEllipse: {
    position: 'absolute',
    right: -50,
    bottom: -10,
    width: 124,
    height: 124,
    backgroundColor: COLORS.WHITE,
    opacity: 0.15,
    borderRadius: 999,
  },
  textBg: {
    position: 'absolute',
    right: -20,
    bottom: -14,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 72,
    lineHeight: 72,
    color: COLORS.WHITE,
    opacity: 0.15,
  },
});

export default styles;
