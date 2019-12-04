import {EMPLOYERS_TYPE} from "../../constants/employerType";
import axiosAction from "../../axios/axiosConfig";

const deleteEmployerAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: EMPLOYERS_TYPE.DELETE_EMPLOYER_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/employer/${id}`,
        }).then(result => {
            dispatch({
                type: EMPLOYERS_TYPE.DELETE_EMPLOYER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: EMPLOYERS_TYPE.DELETE_EMPLOYER_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteEmployerAction;