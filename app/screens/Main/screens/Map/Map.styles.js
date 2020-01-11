import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor} from '_styles/colors';

const MapStyles = StyleSheet.create({
  searchContainer: {
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
  searchInput: {
    color: primaryColor,
    fontSize: 14,
    backgroundColor: secondaryColor,
  },
  searchInputContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: secondaryColor,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  leftContainer: {
    backgroundColor: secondaryColor,
  },
});

export default MapStyles;
