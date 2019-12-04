import {EMPLOYERS_TYPE} from "../../constants/employerType";
import axiosAction from "../../axios/axiosConfig";

const updateEmployerAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: EMPLOYERS_TYPE.UPDATE_EMPLOYER_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/employer/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: EMPLOYERS_TYPE.UPDATE_EMPLOYER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: EMPLOYERS_TYPE.UPDATE_EMPLOYER_FAILED,
            });
            reject(err);
        });

    });
};

export default updateEmployerAction;