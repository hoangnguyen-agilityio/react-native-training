import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    height: 50,
    shadowColor: '#b6b6b6',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 15,
  },
  input: {
    paddingRight: 24,
    paddingLeft: 45,
  },
  findIcon: {
    position: 'absolute',
    left: 24,
    top: 17,
  }
});

export default styles;
