import {AGENTS_TYPE} from "../../constants/agentType";
import axiosAction from "../../axios/axiosConfig";

const updateAgentAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: AGENTS_TYPE.UPDATE_AGENT_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/agents/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: AGENTS_TYPE.UPDATE_AGENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: AGENTS_TYPE.UPDATE_AGENT_FAILED,
            });
            reject(err);
        });

    });
};

export default updateAgentAction;