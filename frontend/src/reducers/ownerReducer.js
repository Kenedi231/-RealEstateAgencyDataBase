import {OWNERS_TYPE} from "../constants/ownerType";


const initialState = {
    owners: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OWNERS_TYPE.GET_OWNERS_REQUEST:
        case OWNERS_TYPE.CREATE_OWNER_REQUEST:
        case OWNERS_TYPE.DELETE_OWNER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case OWNERS_TYPE.GET_OWNERS_RECEIVED:
            return {
                owners: action.payload,
                loading: false,
            };
        case OWNERS_TYPE.GET_OWNERS_FAILED:
        case OWNERS_TYPE.CREATE_OWNER_FAILED:
        case OWNERS_TYPE.CREATE_OWNER_RECEIVED:
        case OWNERS_TYPE.DELETE_OWNER_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}