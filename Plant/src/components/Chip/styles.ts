import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(47, 145, 235, 0.1)',
    borderRadius: 3,
    marginRight: 10,
  },
  label: {
    fontFamily: 'SF-Pro-Display-Bold',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 12,
    color: '#2F91EB'
  },
});

export default styles;
