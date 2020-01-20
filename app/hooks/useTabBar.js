import {useFocusEffect} from '@react-navigation/native';
import {store} from '_redux/store';
import {setVisible} from '_screens/Main/Main.actions';

export default () => {
  useFocusEffect(() => {
    store.dispatch(setVisible(false));
    return () => store.dispatch(setVisible(true));
  }, []);
};
