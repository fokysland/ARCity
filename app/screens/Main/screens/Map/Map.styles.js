import {StyleSheet} from 'react-native';
import {primaryColor, additionalColor, secondaryColor} from '_styles/colors';

const MapStyles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    zIndex: 100,
    width: '80%',
    top: 55,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  viewStyle: StyleSheet.absoluteFill,
  searchInputStyle: {
    color: primaryColor,
    backgroundColor: secondaryColor,
  },
});

export default MapStyles;
