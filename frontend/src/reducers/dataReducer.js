import {DATA_TYPE} from "../constants/dataType";


const initialState = {
    data: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_TYPE.GET_DATA_REQUEST:
        case DATA_TYPE.CREATE_DATA_REQUEST:
        case DATA_TYPE.DELETE_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DATA_TYPE.GET_DATA_RECEIVED:
            return {
                data: action.payload,
                loading: false,
            };
        case DATA_TYPE.GET_DATA_FAILED:
        case DATA_TYPE.CREATE_DATA_FAILED:
        case DATA_TYPE.CREATE_DATA_RECEIVED:
        case DATA_TYPE.DELETE_DATA_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}