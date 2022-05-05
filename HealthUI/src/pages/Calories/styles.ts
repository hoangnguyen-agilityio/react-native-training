import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    marginTop: 40,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 32,
    lineHeight: 32,
    textAlign: 'center',
    color: '#5142AB'
  },
  desc: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#5142AB'
  },
});

export default styles;
