import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
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
  },
  fill: {
    flex: 1,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 27,
    lineHeight: 27,
    color: '#36455A',
  },
  ratingWrap: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginRight: 8,
  },
  ratingNumber: {
    fontFamily: 'SF-Pro-Display-Bold',
  },
  subTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: '#495566',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 12,
  },
  body: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#6A6F7D',
    letterSpacing: 1,
    fontSize: 14,
    lineHeight: 14,
  },
});

export default styles;
