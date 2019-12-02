const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
const AUTHORIZATION_RECEIVED = 'AUTHORIZATION_RECEIVED';
const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';

const initialState = {
    users: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AUTHORIZATION_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        case AUTHORIZATION_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}