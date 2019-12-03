import {AUTHORIZATION_TYPE} from "../constants/authorizationType";
import axiosAction from "../axios/axiosConfig";

const logoutAuthAction = () => dispatch => {
    dispatch({
        type: AUTHORIZATION_TYPE.LOGOUT_REQUEST,
    });

    axiosAction({
        method: 'POST',
        url: '/logout',
        data: {
            status: 'OK',
        }
    }).then(result => {
        if (result.data.success) {
            dispatch({
                type: AUTHORIZATION_TYPE.LOGOUT_SUCCESSFULLY,
            })
        }
        console.log(result);
    }).catch(err => {
        dispatch({
            type: AUTHORIZATION_TYPE.LOGOUT_FAILED,
        })
    })
};

export default logoutAuthAction;