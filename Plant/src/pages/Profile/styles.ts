import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.WHITE,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerWrap: {
    width: '100%',
    height: 240,
  },
  headerBg: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  firstEllipse: {
    position: 'absolute',
    right: -45,
    top: -75,
    width: 293,
    height: 293,
    backgroundColor: COLORS.WHITE,
    opacity: 0.15,
    borderRadius: 999,
  },
  secondEllipse: {
    position: 'absolute',
    right: -68,
    bottom: -92,
    width: 178,
    height: 178,
    backgroundColor: COLORS.WHITE,
    opacity: 0.15,
    borderRadius: 999,
  },
  header: {
    paddingVertical: 40,
  },
  headerContent: {
    marginTop: -24,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  name: {
    marginTop: 15,
    marginBottom: 12,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 23,
    lineHeight: 27,
    color: COLORS.WHITE,
  },
  address: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.WHITE,
  },
  locationIcon: {
    marginRight: 8,
  },
  title: {
    marginVertical: 20,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.CHARCOAL,
  },
  dotIcon: { marginRight: 8 },
  subTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 6,
    color: COLORS.CHARCOAL,
  },
  date: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 12,
    lineHeight: 14,
    color: '#A1A8B9',
  },
  imagesWrap: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#7e7e7e',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 17,
    elevation: 10,
    borderRadius: 3,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  imageLeftCol: {
    flex: 1,
    paddingRight: 5,
  },
  imageRightCol: {
    flex: 1,
    paddingLeft: 5,
  },
  leftImage: {
    width: '100%',
    height: 350,
    borderRadius: 3,
  },
  topRightImage: {
    width: '100%',
    height: 170,
    borderRadius: 3,
  },
  bottomRightImage: {
    marginTop: 10,
    width: '100%',
    height: 170,
    borderRadius: 3,
  },
});

export default styles;
