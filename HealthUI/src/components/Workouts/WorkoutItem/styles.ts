import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    paddingVertical: 16,
    borderBottomColor: '#EDEFF3',
    borderBottomWidth: 1,
    overflow: 'hidden'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    borderRadius: 12,
    backgroundColor: '#EFF0F8',
    padding: 10,
    marginRight: 12,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 14,
    lineHeight: 16,
    color: '#53668E',
  },
  distance: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 16,
    color: '#53668E',
  },
  km: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
    color: '#53668E',
  },
  calor: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
  },
  measure: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 12,
  },
  arrow: {
    marginLeft: 12,
  },
  detailTitle: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#C5CAD3',
    textAlign: 'center',
  },
  detailNumber: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 14,
    color: '#53668E',
    textAlign: 'center',
  },
});

export default styles;
