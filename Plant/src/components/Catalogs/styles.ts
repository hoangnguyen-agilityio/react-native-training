import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catalog: {
    flex: 1,
    marginHorizontal: 6,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    shadowColor: '#8d8d8d',
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 19,
    elevation: 15,
    borderRadius: 3,
  },
  catalogActive: {
    flex: 1,
    marginHorizontal: 6,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
    shadowColor: '#33E49A',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 15,
    borderRadius: 3,
  },
  text: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: '#6A6F7D',
    fontSize: 10,
  },
  textActive: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: COLORS.WHITE,
    fontSize: 10,
  },
});

export default styles;
