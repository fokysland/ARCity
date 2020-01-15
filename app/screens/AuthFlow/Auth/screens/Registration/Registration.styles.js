import {StyleSheet} from 'react-native';
import {Colors, Helpers, Typography} from '_styles/index';

const registrationStyles = StyleSheet.create({
  arcityLabel: {
    color: Colors.primaryColor,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 44,
    marginTop: 22,
  },
  LogoContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  AuthInputs: {
    height: Helpers.verticalScale(39),
    minWidth: '56%',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    marginBottom: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  authContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 19,
  },
  signupButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    minWidth: '56%',
    width: '56%',
    height: Helpers.verticalScale(44),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signupText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  signupButtonContainer: {
    marginTop: 46,
  },
  gotoAuth: {
    color: Colors.primaryColor,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  addPhotoText: {
    color: Colors.primaryColor,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gotoAuthContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 18,
  },
  nycBack: {
    width: '100%',
    height: '100%',
  },
  awareView: {
    flex: 1,
  },
  awareChild: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  uploadAvatar: {
    backgroundColor: '#FFFFFF66',
    width: Helpers.scaleSize(210),
    height: Helpers.scaleSize(210),
    borderRadius: 15,
  },
});

export default registrationStyles;
