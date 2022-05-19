import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 144,
  },
  itemWrapper: {
    marginRight: 18,
    width: 126,
    height: 144,
    borderRadius: 3,
  },
  illusionBg: {
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(196, 196, 196, 0.15)',
    borderRadius: 3,
  },
  tagWrapper: {
    paddingHorizontal: 12,
    height: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  tag: {
    fontFamily: 'SF-Pro-Display-Medium',
    color: '#2E382F',
    fontSize: 10,
    lineHeight: 10,
    opacity: 0.8,
  },
});

export default styles;
