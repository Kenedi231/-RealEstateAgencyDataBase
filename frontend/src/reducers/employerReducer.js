import {EMPLOYERS_TYPE} from "../constants/employerType";


const initialState = {
    employers: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYERS_TYPE.GET_EMPLOYERS_REQUEST:
        case EMPLOYERS_TYPE.CREATE_EMPLOYER_REQUEST:
        case EMPLOYERS_TYPE.DELETE_EMPLOYER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EMPLOYERS_TYPE.GET_EMPLOYERS_RECEIVED:
            return {
                employers: action.payload,
                loading: false,
            };
        case EMPLOYERS_TYPE.GET_EMPLOYERS_FAILED:
        case EMPLOYERS_TYPE.CREATE_EMPLOYER_FAILED:
        case EMPLOYERS_TYPE.CREATE_EMPLOYER_RECEIVED:
        case EMPLOYERS_TYPE.DELETE_EMPLOYER_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}