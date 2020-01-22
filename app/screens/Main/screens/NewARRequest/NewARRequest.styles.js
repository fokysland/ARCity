import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.designWhite,
    alignItems: 'center',
    paddingHorizontal: Helpers.scaleSize(37),
    paddingTop: Helpers.verticalScale(27),
    height: '100%',
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Helpers.scaleSize(300),
    width: Helpers.scaleSize(300),
    borderRadius: 10,
  },
  nameInput: {
    width: '100%',
    ...Typography.FONT_SEMIBOLD,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 7,
    padding: Helpers.scaleSize(8),
    fontSize: Helpers.scaleSize(14),
    marginTop: Helpers.verticalScale(20),
    marginBottom: Helpers.verticalScale(11),
  },
  placeholder: {
    color: Colors.designBlack,
  },
  requestDescription: {
    marginLeft: Helpers.scaleSize(36),
    marginRight: Helpers.scaleSize(36),
  },
  descriptionTextInput: {
    ...Typography.FONT_REGULAR,
    color: Colors.designBlack,
    fontSize: Helpers.scaleSize(14),
    marginTop: Helpers.verticalScale(5),
    borderColor: Colors.additionalColor,
    borderWidth: 1,
    borderRadius: 5,
    minHeight: Helpers.verticalScale(190),
    textAlignVertical: 'top',
    padding: Helpers.scaleSize(10),
    width: '100%',
  },
  sendRequest: {
    ...Typography.FONT_SEMIBOLD,
    marginTop: Helpers.verticalScale(20),
    backgroundColor: Colors.attractionColor,
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
