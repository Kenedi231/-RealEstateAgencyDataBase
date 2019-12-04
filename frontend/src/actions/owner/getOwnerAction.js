import {OWNERS_TYPE} from "../../constants/ownerType";
import axiosAction from "../../axios/axiosConfig";

const getOwnerAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: OWNERS_TYPE.GET_OWNERS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/owner',
        }).then(result => {
            console.log(result);
            dispatch({
                type: OWNERS_TYPE.GET_OWNERS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: OWNERS_TYPE.GET_OWNERS_FAILED,
            });

            reject(err);
        });
    });
};

export default getOwnerAction;