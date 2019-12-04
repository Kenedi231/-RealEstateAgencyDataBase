import {DATA_TYPE} from "../../constants/dataType";
import axiosAction from "../../axios/axiosConfig";

const updateDataAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: DATA_TYPE.UPDATE_DATA_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/user-data/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: DATA_TYPE.UPDATE_DATA_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: DATA_TYPE.UPDATE_DATA_FAILED,
            });
            reject(err);
        });

    });
};

export default updateDataAction;