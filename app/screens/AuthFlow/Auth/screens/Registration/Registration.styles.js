import {StyleSheet} from 'react-native';
import {Colors, Helpers, Typography} from '_styles/index';

const registrationStyles = StyleSheet.create({
  arcityLabel: {
    ...Typography.EXTRA_BOLD,
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(44),
    marginTop: Helpers.verticalScale(22),
  },
  LogoContainer: {
    alignSelf: 'center',
  },
  authContainer: {
    alignSelf: 'center',
    marginTop: Helpers.verticalScale(20),
  },
  signupButton: {
    alignSelf: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    width: '56%',
    height: Helpers.verticalScale(44),
    justifyContent: 'center',
  },
  signupText: {
    ...Typography.FONT_MEDIUM,
    color: '#fff',
    textAlign: 'center',
    fontSize: Helpers.scaleSize(18),
  },
  signupButtonContainer: {
    marginTop: Helpers.verticalScale(16),
  },
  gotoAuth: {
    ...Typography.FONT_MEDIUM,
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(14),
  },
  uploadAvatar: {
    backgroundColor: '#FFFFFF66',
    width: Helpers.scaleSize(210),
    height: Helpers.scaleSize(210),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoText: {
    ...Typography.FONT_MEDIUM,
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(14),
  },
  gotoAuthContainer: {
    alignSelf: 'center',
    marginTop: Helpers.verticalScale(18),
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default registrationStyles;
