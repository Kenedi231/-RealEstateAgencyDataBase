import {AGENTS_TYPE} from "../../constants/agentType";
import axiosAction from "../../axios/axiosConfig";

const getAgentsAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: AGENTS_TYPE.GET_AGENTS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/agents',
        }).then(result => {
            dispatch({
                type: AGENTS_TYPE.GET_AGENTS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: AGENTS_TYPE.GET_AGENTS_FAILED,
            });

            reject(err);
        });
    });
};

export default getAgentsAction;