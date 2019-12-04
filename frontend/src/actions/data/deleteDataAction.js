import {DATA_TYPE} from "../../constants/dataType";
import axiosAction from "../../axios/axiosConfig";

const deleteDataAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: DATA_TYPE.DELETE_DATA_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/user-data/${id}`,
        }).then(result => {
            dispatch({
                type: DATA_TYPE.DELETE_DATA_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: DATA_TYPE.DELETE_DATA_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteDataAction;