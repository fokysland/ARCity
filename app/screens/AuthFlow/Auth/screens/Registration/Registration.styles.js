import {StyleSheet} from 'react-native';
import {Colors, Helpers, Typography} from '_styles/index';

const registrationStyles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: Helpers.scaleSize(82),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  arcityLabel: {
    ...Typography.EXTRA_BOLD,
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(44),
    marginTop: Helpers.verticalScale(22),
  },
  logoContainer: {
    alignSelf: 'center',
  },
  picker: {
    marginTop: Helpers.verticalScale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  photoContainer: {
    marginTop: Helpers.verticalScale(25),
    marginBottom: Helpers.verticalScale(25),
  },
  signupButton: {
    marginTop: Helpers.verticalScale(16),
    alignSelf: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    width: '100%',
    height: Helpers.verticalScale(44),
    justifyContent: 'center',
  },
  signupText: {
    ...Typography.FONT_MEDIUM,
    color: '#fff',
    textAlign: 'center',
    fontSize: Helpers.scaleSize(18),
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
});

export default registrationStyles;
