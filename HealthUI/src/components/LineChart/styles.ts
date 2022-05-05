import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    height: 200,
  },
  illusion: {
    position: 'absolute',
    left: -5,
    zIndex: 0,
    top: 0,
  },
  chart: {
    position: 'absolute',
    top: 0,
    marginLeft: -70,
    zIndex: 999,
  },
  pointBox: {
    position: 'absolute',
    width: 71,
    height: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    zIndex: 1,

    shadowColor: 'rgb(145, 150, 171)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 100,
  },
  pointBoxContent: {
    fontFamily: 'SF-Pro-Display-Bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#2FBAF4',
  },
  xLabelBox: {
    position: 'absolute',
    width: 80,
  },
  xLabel: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#5142AB',
  },
});

export default styles;
