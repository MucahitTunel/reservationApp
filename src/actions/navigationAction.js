import {NAVIGATION} from '../components/actionTypes';

export const navigationAction = (payload) => (
    {
        type: NAVIGATION,
        payload: payload
    }
)