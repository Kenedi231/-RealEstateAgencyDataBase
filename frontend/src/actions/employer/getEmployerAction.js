import {EMPLOYERS_TYPE} from "../../constants/employerType";
import axiosAction from "../../axios/axiosConfig";

const getEmployerAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: EMPLOYERS_TYPE.GET_EMPLOYERS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/employer',
        }).then(result => {
            dispatch({
                type: EMPLOYERS_TYPE.GET_EMPLOYERS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: EMPLOYERS_TYPE.GET_EMPLOYERS_FAILED,
            });

            reject(err);
        });
    });
};

export default getEmployerAction;