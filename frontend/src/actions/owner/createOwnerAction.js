import {OWNERS_TYPE} from "../../constants/ownerType";
import axiosAction from "../../axios/axiosConfig";

const createOwnerAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: OWNERS_TYPE.CREATE_OWNER_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/owner',
            data,
        }).then(result => {
            dispatch({
                type: OWNERS_TYPE.CREATE_OWNER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: OWNERS_TYPE.CREATE_OWNER_FAILED,
            });
            reject(err);
        });

    });
};

export default createOwnerAction;