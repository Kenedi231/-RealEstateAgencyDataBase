import {DATA_TYPE} from "../../constants/dataType";
import axiosAction from "../../axios/axiosConfig";

const getDataAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: DATA_TYPE.GET_DATA_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/user-data',
        }).then(result => {
            dispatch({
                type: DATA_TYPE.GET_DATA_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: DATA_TYPE.GET_DATA_FAILED,
            });

            reject(err);
        });
    });
};

export default getDataAction;