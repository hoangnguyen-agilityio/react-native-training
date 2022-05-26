import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemWrap: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  leftCol: {
    flex: 1,
    marginRight: 6,
  },
  rightCol: {
    flex: 1,
    marginLeft: 6,
  },
  imageWrap: {
    padding: 7,
    width: 140,
    height: 140,
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 15,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 3,
  },
  content: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.CHARCOAL,
  },
  subTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 14,
    color: '#A1A8B9',
    marginBottom: 5,
    marginTop: 10,
  },
  body: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#495566',
  },
});

export default styles;
