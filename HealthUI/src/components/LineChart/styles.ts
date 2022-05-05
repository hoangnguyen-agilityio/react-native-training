import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pointBox: {
    width: 71,
    height: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: 'rgb(145, 150, 171)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 100,
  },
  dataPoint: {
    fontFamily: 'SF-Pro-Display-Bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#2FBAF4'
  }
});

export default styles;
