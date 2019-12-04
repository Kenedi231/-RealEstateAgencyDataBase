import {EMPLOYERS_TYPE} from "../../constants/employerType";
import axiosAction from "../../axios/axiosConfig";

const createEmployerAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: EMPLOYERS_TYPE.CREATE_EMPLOYER_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/employer',
            data,
        }).then(result => {
            dispatch({
                type: EMPLOYERS_TYPE.CREATE_EMPLOYER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: EMPLOYERS_TYPE.CREATE_EMPLOYER_FAILED,
            });
            reject(err);
        });

    });
};

export default createEmployerAction;