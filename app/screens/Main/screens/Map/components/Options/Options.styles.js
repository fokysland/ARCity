import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  sliderLength: Helpers.scaleSize(145),
  container: {
    flex: 1,
  },
  header: {
    marginBottom: Helpers.verticalScale(13),
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Helpers.verticalScale(7),
    height: Helpers.verticalScale(20),
  },
  option: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Helpers.verticalScale(5),
  },
  title: {
    marginLeft: 7,
  },
  slider: {
    marginBottom: Helpers.verticalScale(-20),
  },
  clear: {
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginVertical: 0,
    marginHorizontal: 0,
  },
});

export default style;
