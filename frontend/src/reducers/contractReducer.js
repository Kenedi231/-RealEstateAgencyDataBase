import {CONTRACTS_TYPE} from "../constants/contractType";


const initialState = {
    contracts: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTRACTS_TYPE.GET_CONTRACTS_REQUEST:
        case CONTRACTS_TYPE.CREATE_CONTRACT_REQUEST:
        case CONTRACTS_TYPE.DELETE_CONTRACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CONTRACTS_TYPE.GET_CONTRACTS_RECEIVED:
            return {
                contracts: action.payload,
                loading: false,
            };
        case CONTRACTS_TYPE.GET_CONTRACTS_FAILED:
        case CONTRACTS_TYPE.CREATE_CONTRACT_FAILED:
        case CONTRACTS_TYPE.CREATE_CONTRACT_RECEIVED:
        case CONTRACTS_TYPE.DELETE_CONTRACT_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}