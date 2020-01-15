import {StyleSheet} from 'react-native';
import * as stylesIndex from '_styles/index.js';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const authStyles = StyleSheet.create({
  arcityIcon: {
    width: stylesIndex.Helpers.moderateScale(47),
    height: stylesIndex.Helpers.moderateScale(58),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  arcityLabel: {
    color: stylesIndex.Colors.primaryColor,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 44,
    marginTop: 22,
  },
  LogoContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  AuthInputs: {
    height: stylesIndex.Helpers.verticalScale(39),
    minWidth: '56%',
    borderColor: stylesIndex.Colors.primaryColor,
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
    backgroundColor: stylesIndex.Colors.primaryColor,
    borderRadius: 50,
    minWidth: '56%',
    width: '56%',
    height: stylesIndex.Helpers.verticalScale(44),
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
    color: stylesIndex.Colors.primaryColor,
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
  mainContainer: {},
  awareView: {
    flex: 1,
  },
  awareChild: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default authStyles;
