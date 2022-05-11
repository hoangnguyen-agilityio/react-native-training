import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GREEN,
    borderRadius: 3
  },
  text: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 15,
    color: COLORS.WHITE,
    textTransform: 'uppercase',
  },
});

export default styles;
