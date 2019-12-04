import {OWNERS_TYPE} from "../../constants/ownerType";
import axiosAction from "../../axios/axiosConfig";

const updateOwnerAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: OWNERS_TYPE.UPDATE_OWNER_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/owner/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: OWNERS_TYPE.UPDATE_OWNER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: OWNERS_TYPE.UPDATE_OWNER_FAILED,
            });
            reject(err);
        });

    });
};

export default updateOwnerAction;