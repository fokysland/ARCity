import {StyleSheet} from 'react-native';

import {Colors, Helpers, Typography} from '_styles/index';

const styles = StyleSheet.create({
  searchBarContainer: {
    position: 'absolute',
    top: Helpers.verticalScale(55),
    width: Helpers.scaleSize(330),
    alignSelf: 'center',
  },
  searchContainer: {
    alignSelf: 'center',
  },
  searchInput: {
    ...Typography.FONT_MEDIUM,
    height: Helpers.verticalScale(50),
    color: Colors.primaryColor,
    fontSize: Helpers.scaleFont(14),
    backgroundColor: Colors.secondaryColor,
    textAlignVertical: 'center',
  },
  searchInputContainer: {
    height: Helpers.verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: Colors.secondaryColor,
  },
  leftContainer: {
    backgroundColor: Colors.secondaryColor,
  },
});

export default styles;
