import axiosAction from "../axios/axiosConfig";

const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
const AUTHORIZATION_RECEIVED = 'AUTHORIZATION_RECEIVED';
const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';

const sendAuthDataAction = (data) => dispatch => {
    dispatch({
        type: AUTHORIZATION_REQUEST,
    });
    axiosAction({
        method: 'POST',
        url: 'auth',
        data,
    }).then(result => {
        dispatch({
            type: AUTHORIZATION_RECEIVED,
        });
    }).catch(() => {
        dispatch({
            type: AUTHORIZATION_FAILED,
        });
    });
};

export default sendAuthDataAction;