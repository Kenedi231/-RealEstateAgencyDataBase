import {CONTRACT_WITH_AGENCY_TYPE} from "../constants/contractWithAgencyType";


const initialState = {
    contractWithAgency: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_REQUEST:
        case CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_REQUEST:
        case CONTRACT_WITH_AGENCY_TYPE.DELETE_CONTRACT_WITH_AGENCY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_RECEIVED:
            return {
                contractWithAgency: action.payload,
                loading: false,
            };
        case CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_FAILED:
        case CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_FAILED:
        case CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_RECEIVED:
        case CONTRACT_WITH_AGENCY_TYPE.DELETE_CONTRACT_WITH_AGENCY_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}