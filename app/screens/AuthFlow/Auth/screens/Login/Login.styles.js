import {StyleSheet} from 'react-native';
import {Helpers, Colors, Typography} from '_styles/index';
import {scaleSize} from '_styles/helpers';

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
  },
  authContainer: {
    alignSelf: 'center',
    marginTop: Helpers.verticalScale(20),
    width: scaleSize(210),
  },
  loginButton: {
    marginTop: Helpers.verticalScale(45),
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
    fontSize: scaleSize(18),
  },
  gotoReg: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.primaryColor,
    fontSize: scaleSize(14),
  },
  gotoRegContainer: {
    marginTop: scaleSize(20),
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
