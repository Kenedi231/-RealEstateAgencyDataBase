import {AGENTS_TYPE} from "../constants/agentType";


const initialState = {
    agents: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AGENTS_TYPE.GET_AGENTS_REQUEST:
        case AGENTS_TYPE.CREATE_AGENT_REQUEST:
        case AGENTS_TYPE.DELETE_AGENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AGENTS_TYPE.GET_AGENTS_RECEIVED:
            return {
                agents: action.payload,
                loading: false,
            };
        case AGENTS_TYPE.GET_AGENTS_FAILED:
        case AGENTS_TYPE.CREATE_AGENT_FAILED:
        case AGENTS_TYPE.CREATE_AGENT_RECEIVED:
        case AGENTS_TYPE.DELETE_AGENT_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}