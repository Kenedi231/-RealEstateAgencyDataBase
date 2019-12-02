import axiosAction from "../axios/axiosConfig";

const GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST';
const GET_USER_LIST_RECEIVED = 'GET_USER_LIST_RECEIVED';
const GET_USER_LIST_FAILED = 'GET_USER_LIST_FAILED';

const getUserDataAction = () => dispatch => {
    dispatch({
        type: GET_USER_LIST_REQUEST,
    });

    axiosAction({
        method: 'GET',
        url: 'users'
    }).then(result => {
        dispatch({
            type: GET_USER_LIST_RECEIVED,
            payload: {
                users: result.data,
            }
        });
    }).catch(() => {
        dispatch({
            type: GET_USER_LIST_FAILED,
        });
    });
};

export default getUserDataAction;
