import {DATA_TYPE} from "../../constants/dataType";
import axiosAction from "../../axios/axiosConfig";

const createDataAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: DATA_TYPE.CREATE_DATA_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/user-data',
            data,
        }).then(result => {
            dispatch({
                type: DATA_TYPE.CREATE_DATA_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: DATA_TYPE.CREATE_DATA_FAILED,
            });
            reject(err);
        });

    });
};

export default createDataAction;