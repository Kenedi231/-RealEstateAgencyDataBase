import {USERS_TYPE} from "../../constants/userType";
import axiosAction from "../../axios/axiosConfig";

const deleteUserAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: USERS_TYPE.DELETE_USER_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/users/${id}`,
        }).then(result => {
            dispatch({
                type: USERS_TYPE.DELETE_USER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: USERS_TYPE.DELETE_USER_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteUserAction;