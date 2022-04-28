import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFPRODISPLAYBOLD',
    fontSize: 24,
    color: colors.dark,
  },
  date: {
    fontFamily: 'SFPRODISPLAYMEDIUM',
    color: colors.purple,
    fontSize: 16,
  },
  avatar: {
    width: 44,
    height: 44,
  },
});

export default styles;
