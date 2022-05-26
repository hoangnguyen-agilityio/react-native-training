import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 280,
    position: 'relative',
  },
  navigation: {
    paddingTop: 40,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  paddingSection: {
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.CHARCOAL,
  },
  body: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#6A6F7D',
    letterSpacing: 1,
    fontSize: 14,
    lineHeight: 17,
  },
  avatar: {
    width: 37,
    height: 37,
    marginRight: 10,
  },
  authorWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  followBtn: {
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  followText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 10,
    color: COLORS.WHITE
  },
  plusIcon: {
    marginRight: 6,
    fontSize: 7
  }
});

export default styles;
