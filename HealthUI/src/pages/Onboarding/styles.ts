import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  cta: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  illu: {
    width: '100%',
  },
  title: {
    marginTop: 40,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 28,
    color: '#061941',
    textAlign: 'center',
  },
  desc: {
    marginTop: 24,
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: '#9DA4B4',
    textAlign: 'center',
  },
});

export default styles;
