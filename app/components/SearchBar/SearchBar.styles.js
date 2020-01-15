import {Helpers} from '_styles/index';

const styles = {
  container: {
    width: '100%',
    paddingHorizontal: Helpers.scaleSize(10),
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: Helpers.scaleSize(16),
  },
  iconContainer: {
    height: Helpers.scaleSize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Helpers.scaleSize(15),
    marginRight: Helpers.scaleSize(10),
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: Helpers.scaleFont(18),
    flex: 1,
    minHeight: Helpers.verticalScale(40),
  },
};

export default styles;
