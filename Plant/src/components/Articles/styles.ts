import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  itemWrap: {
    marginBottom: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 10,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: 145,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    width: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: 'white',
    padding: 15,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.CHARCOAL,
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorWrap: {
    justifyContent: 'space-between',
    marginTop: 15,
  },
  avatar: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  author: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 11,
    lineHeight: 13,
    marginBottom: 4,
    color: COLORS.CHARCOAL,
  },
  date: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 9,
    lineHeight: 11,
    color: '#A1A8B9',
  },
  heartIcon: {
    marginLeft: 24,
  },
});

export default styles;
