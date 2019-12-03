import {AUTHORIZATION_TYPE} from "../constants/authorizationType";

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
const userId = localStorage.getItem('userId');

const initialState = {
    username,
    userId,
    token: token === 'null' ? null : token,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION_TYPE.AUTHORIZATION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AUTHORIZATION_TYPE.AUTHORIZATION_RECEIVED:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('userId', action.payload.id);
            return {
                username: action.payload.username,
                userId: action.payload.id,
                token: action.payload.token,
                loading: false,
            };
        case AUTHORIZATION_TYPE.AUTHORIZATION_FAILED:
            return {
                ...state,
                loading: false,
            };
        case AUTHORIZATION_TYPE.LOGOUT_SUCCESSFULLY:
            localStorage.setItem('token', null);
            localStorage.setItem('username', null);
            localStorage.setItem('userId', null);
            return {
                username: null,
                userId: null,
                token: null,
                loading: false,
            };
        default:
            return state
    }
}