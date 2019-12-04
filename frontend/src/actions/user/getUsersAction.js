import {USERS_TYPE} from "../../constants/userType";
import axiosAction from "../../axios/axiosConfig";

const getUsersAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: USERS_TYPE.GET_USERS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/users',
        }).then(result => {
            dispatch({
                type: USERS_TYPE.GET_USERS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: USERS_TYPE.GET_USERS_FAILED,
            });

            reject(err);
        });
    });
};

export default getUsersAction;