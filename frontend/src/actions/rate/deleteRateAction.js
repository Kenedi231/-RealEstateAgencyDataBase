import {RATES_TYPE} from "../../constants/rateType";
import axiosAction from "../../axios/axiosConfig";

const deleteRateAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: RATES_TYPE.DELETE_RATE_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/rates/${id}`,
        }).then(result => {
            dispatch({
                type: RATES_TYPE.DELETE_RATE_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: RATES_TYPE.DELETE_RATE_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteRateAction;