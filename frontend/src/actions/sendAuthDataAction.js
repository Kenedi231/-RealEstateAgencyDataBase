import axiosAction from "../axios/axiosConfig";
import {AUTHORIZATION_TYPE} from "../constants/authorizationType";

const sendAuthDataAction = (data) => dispatch => {
    dispatch({
        type: AUTHORIZATION_TYPE.AUTHORIZATION_REQUEST,
    });
    axiosAction({
        method: 'POST',
        url: '/auth',
        data,
    }).then(result => {
        dispatch({
            type: AUTHORIZATION_TYPE.AUTHORIZATION_RECEIVED,
            payload: result.data,
        });
    }).catch(() => {
        dispatch({
            type: AUTHORIZATION_TYPE.AUTHORIZATION_FAILED,
        });
    });
};

export default sendAuthDataAction;