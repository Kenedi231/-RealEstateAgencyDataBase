import {USERS_TYPE} from "../constants/userType";


const initialState = {
    users: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERS_TYPE.GET_USERS_REQUEST:
        case USERS_TYPE.CREATE_USER_REQUEST:
        case USERS_TYPE.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USERS_TYPE.GET_USERS_RECEIVED:
            return {
                users: action.payload,
                loading: false,
            };
        case USERS_TYPE.GET_USERS_FAILED:
        case USERS_TYPE.CREATE_USER_FAILED:
        case USERS_TYPE.CREATE_USER_RECEIVED:
        case USERS_TYPE.DELETE_USER_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}