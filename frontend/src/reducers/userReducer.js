const GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST';
const GET_USER_LIST_RECEIVED = 'GET_USER_LIST_RECEIVED';
const GET_USER_LIST_FAILED = 'GET_USER_LIST_FAILED';

const initialState = {
    users: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_LIST_RECEIVED:
            return {
                users: action.payload.users,
                loading: false,
            };
        case GET_USER_LIST_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}