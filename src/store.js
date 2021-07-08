import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import navigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
    isLoginReducers : loginReducer,
    navigationReducer: navigationReducer 
});

const configureStore = () => createStore(rootReducer);

export default configureStore;