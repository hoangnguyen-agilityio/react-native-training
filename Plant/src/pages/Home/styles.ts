import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContent: {
    marginTop: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 21,
    lineHeight: 21,
    marginBottom: 10,
    color: COLORS.WHITE,
  },
  headerDesc: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.WHITE,
  },
  avatar: {
    width: 47,
    height: 47,
  },
});

export default styles;
