import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const useStyle = () => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: colors.white,
      flex: 1,
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginTop: 24,
    },
    flexItemLeft: {
      flex: 1,
      marginRight: 12,
    },
    flexItemRight: {
      flex: 1,
      marginLeft: 12,
    },
    itemsCenter: {
      alignItems: 'center',
    },
    waterIllusion: {
      marginTop: 30,
      marginBottom: 10,
      alignItems: 'center',
    },
    caloriesGraph: {
      width: '100%',
      height: 'auto',
      aspectRatio: 2.9,
      marginBottom: 85,
      marginTop: 45,
    },
    number: {
      fontFamily: 'SF-Pro-Display-Bold',
      fontSize: 16,
      lineHeight: 16,
      color: colors.purple,
    },
    measure: {
      fontFamily: 'SF-Pro-Display-Regular',
      fontSize: 12,
      lineHeight: 14,
      color: '#A274CD',
    },
  });

  return styles;
};

export default useStyle;
