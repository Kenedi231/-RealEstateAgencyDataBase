import {RATES_TYPE} from "../constants/rateType";


const initialState = {
    rates: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RATES_TYPE.GET_RATES_REQUEST:
        case RATES_TYPE.CREATE_RATE_REQUEST:
        case RATES_TYPE.DELETE_RATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RATES_TYPE.GET_RATES_RECEIVED:
            return {
                rates: action.payload,
                loading: false,
            };
        case RATES_TYPE.GET_RATES_FAILED:
        case RATES_TYPE.CREATE_RATE_FAILED:
        case RATES_TYPE.CREATE_RATE_RECEIVED:
        case RATES_TYPE.DELETE_RATE_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}