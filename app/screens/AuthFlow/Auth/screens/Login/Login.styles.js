import {StyleSheet} from 'react-native';
import {Helpers, Colors, Typography} from '_styles/index';

const loginStyles = StyleSheet.create({
  arcityIcon: {
    width: Helpers.scaleSize(47),
    height: Helpers.verticalScale(58),
    alignSelf: 'center',
  },
  arcityLabel: {
    color: Colors.primaryColor,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: Helpers.scaleSize(44),
    marginTop: Helpers.verticalScale(20),
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: Helpers.verticalScale(30),
  },
  authContainer: {
    alignSelf: 'center',
    marginBottom: Helpers.verticalScale(50),
    width: Helpers.scaleSize(210),
  },
  input: {
    marginBottom: Helpers.verticalScale(40),
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    minWidth: '56%',
    width: '56%',
    height: Helpers.verticalScale(44),
  },
  loginText: {
    ...Typography.FONT_MEDIUM,
    color: '#fff',
    textAlign: 'center',
    fontSize: Helpers.scaleSize(18),
  },
  gotoReg: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(14),
  },
  gotoRegContainer: {
    marginTop: Helpers.scaleSize(20),
    alignSelf: 'center',
  },
  nycBack: {
    width: '100%',
    height: '100%',
  },
  awareChild: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default loginStyles;
