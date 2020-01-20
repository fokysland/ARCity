import {StyleSheet} from 'react-native';
import {Helpers, Colors, Typography} from '_styles/index';

const loginStyles = StyleSheet.create({
  arcityIcon: {
    alignSelf: 'center',
  },
  arcityLabel: {
    ...Typography.EXTRA_BOLD,
    color: Colors.primaryColor,
    fontSize: Helpers.scaleSize(44),
    marginTop: Helpers.verticalScale(20),
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: Helpers.verticalScale(50),
  },
  input: {
    marginBottom: Helpers.verticalScale(40),
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    width: '100%',
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
    paddingHorizontal: Helpers.scaleSize(82),
    justifyContent: 'center',
    height: '100%',
  },
});

export default loginStyles;
