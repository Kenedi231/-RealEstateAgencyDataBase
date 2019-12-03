import {APARTMENTS_TYPE} from "../constants/apartmentType";


const initialState = {
    apartments: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APARTMENTS_TYPE.GET_APARTMENTS_REQUEST:
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
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}