import {useEffect} from 'react';
import {store} from '_redux/store';
import {setVisible} from '_screens/Main/Main.actions';

export default () => {
  useEffect(() => {
    store.dispatch(setVisible(false));
    return () => store.dispatch(setVisible(true));
  }, []);
};
