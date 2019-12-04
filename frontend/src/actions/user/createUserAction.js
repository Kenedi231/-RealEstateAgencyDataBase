import {USERS_TYPE} from "../../constants/userType";
import axiosAction from "../../axios/axiosConfig";

const createUserAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: USERS_TYPE.CREATE_USER_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/users',
            data,
        }).then(result => {
            dispatch({
                type: USERS_TYPE.CREATE_USER_FAILED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: USERS_TYPE.CREATE_USER_FAILED,
            });
            reject(err);
        });

    });
};

export default createUserAction;