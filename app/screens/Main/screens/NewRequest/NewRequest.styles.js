import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  mainContainer: {
    marginTop: Helpers.verticalScale(0),
  },
  image: {
    width: Helpers.scaleSize(301),
    height: Helpers.scaleSize(301),
    backgroundColor: '#000',
    marginTop: Helpers.verticalScale(27),
  },
  requestDescription: {
    marginLeft: Helpers.scaleSize(36),
    marginTop: Helpers.verticalScale(0),
    marginRight: Helpers.scaleSize(36),
  },
  droplistOpener: {
    fontSize: Helpers.scaleSize(27),
  },
  gmapsIcon: {
    width: Helpers.scaleSize(25),
    height: Helpers.verticalScale(26),
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: Helpers.scaleSize(180),
    justifyContent: 'space-between',
  },
  descriptionTextInput: {
    marginTop: Helpers.verticalScale(20),
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    height: Helpers.verticalScale(120),
    textAlignVertical: 'top',
  },
  sendRequest: {
    marginTop: Helpers.verticalScale(20),
    backgroundColor: '#F64E8A',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    height: Helpers.verticalScale(48),
    width: Helpers.scaleSize(224),
  },
  sendButtonText: {
    ...Typography.FONT_MEDIUM,
    color: '#fff',
    textAlign: 'center',
    fontSize: Helpers.scaleSize(18),
  },
});

export default style;
