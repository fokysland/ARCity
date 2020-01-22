import {useFocusEffect} from '@react-navigation/native';
import {store} from '_redux/store';
import {setVisible} from '_screens/Main/Main.actions';

export default value => {
  useFocusEffect(() => {
    store.dispatch(setVisible(value));
  }, []);
};
