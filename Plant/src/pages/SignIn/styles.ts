import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 30,
    lineHeight: 30,
    marginBottom: 12,
    color: COLORS.CHARCOAL,
  },
  desc: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.INDEPENDENCE,
    opacity: 0.8,
  },
  SignInForm: {
    width: '100%',
  },
  formField: {
    marginTop: 24,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'center',
    color: COLORS.NICKEL,
  },
  SignInLink: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 12,
    lineHeight: 12,
    color: COLORS.GREEN,
  }
});

export default styles;
