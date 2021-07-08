import { NAVIGATION } from '../components/actionTypes';


const navigationReducer = (state = {}, action) => {
    switch(action.type){
        case NAVIGATION:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default navigationReducer;