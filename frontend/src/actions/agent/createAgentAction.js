import {AGENTS_TYPE} from "../../constants/agentType";
import axiosAction from "../../axios/axiosConfig";

const createAgentAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: AGENTS_TYPE.CREATE_AGENT_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/agents',
            data,
        }).then(result => {
            dispatch({
                type: AGENTS_TYPE.CREATE_AGENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: AGENTS_TYPE.CREATE_AGENT_FAILED,
            });
            reject(err);
        });

    });
};

export default createAgentAction;