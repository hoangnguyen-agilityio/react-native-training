import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    height: 160,
  },
  itemWrapper: {
    marginRight: 15,
    paddingHorizontal: 14,
    paddingVertical: 16,
    width: 300,
    height: 160,
    borderRadius: 3,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  illusionBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#3d3d3d',
    borderRadius: 3,
    opacity: 0.22,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 20,
  },
  desc: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: COLORS.WHITE,
    fontSize: 12,
  },
});

export default styles;
