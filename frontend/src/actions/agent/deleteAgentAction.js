import {AGENTS_TYPE} from "../../constants/agentType";
import axiosAction from "../../axios/axiosConfig";

const deleteAgentAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: AGENTS_TYPE.DELETE_AGENT_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/agents/${id}`,
        }).then(result => {
            dispatch({
                type: AGENTS_TYPE.DELETE_AGENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: AGENTS_TYPE.DELETE_AGENT_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteAgentAction;