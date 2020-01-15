import {StyleSheet} from 'react-native';
import {Helpers, Colors, Typography} from '_styles/index';

const loginStyles = StyleSheet.create({
  arcityIcon: {
    width: Helpers.moderateScale(47),
    height: Helpers.moderateScale(58),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
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
  loginButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    minWidth: '56%',
    width: '56%',
    height: Helpers.verticalScale(44),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  loginButtonContainer: {
    marginTop: 46,
  },
  gotoReg: {
    color: Colors.primaryColor,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  gotoRegContainer: {
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
});

export default loginStyles;
