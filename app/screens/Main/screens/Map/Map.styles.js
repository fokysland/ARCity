import {StyleSheet} from 'react-native';

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
  searchInputStyle: {},
});

export default MapStyles;
