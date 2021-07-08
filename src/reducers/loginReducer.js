import {LOGIN, LOGOUT} from '../components/actionTypes';

const initialState = {
    name: "",
    password: "",
    isLogin: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            state = action.payload;
            return state;
        case LOGOUT:
            state = initialState;
            return state;
        default:
            return state;
    }
}

export default loginReducer;