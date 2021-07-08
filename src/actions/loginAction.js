import {LOGIN, LOGOUT} from '../components/actionTypes';

export const Login = (payload) => (
    {
        type: LOGIN,
        payload: payload
    }
)

export const logOut = () => (
    {
        type: LOGOUT,
        payload: payload
    }
)