import {APARTMENTS_TYPE} from "../constants/apartmentType";


const initialState = {
    apartments: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APARTMENTS_TYPE.GET_APARTMENTS_REQUEST:
        case APARTMENTS_TYPE.CREATE_APARTMENT_REQUEST:
        case APARTMENTS_TYPE.DELETE_APARTMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case APARTMENTS_TYPE.GET_APARTMENTS_RECEIVED:
            return {
                apartments: action.payload,
                loading: false,
            };
        case APARTMENTS_TYPE.GET_APARTMENTS_FAILED:
        case APARTMENTS_TYPE.CREATE_APARTMENT_FAILED:
            return {
                ...state,
                loading: false,
            };
        case APARTMENTS_TYPE.CREATE_APARTMENT_RECEIVED:
        case APARTMENTS_TYPE.DELETE_APARTMENT_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}