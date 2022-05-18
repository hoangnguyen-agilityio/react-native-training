import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContent: {
    marginTop: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 21,
    lineHeight: 21,
    marginBottom: 10,
    color: COLORS.WHITE,
  },
  headerDesc: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.WHITE,
  },
  avatar: {
    width: 47,
    height: 47,
  },
  main: {
    backgroundColor: COLORS.WHITE,
  },
  catalogsWrapper: {
    marginTop: 35,
    marginHorizontal: -6,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 16,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 17,
    lineHeight: 20,
    color: '#36455A'
  },
  horizontalListWrapper: {
    marginRight: -24,
  }
});

export default styles;
