import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    color: '#061941',
  },
  showAll: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 14,
    color: colors.purple
  }
});

export default styles;
