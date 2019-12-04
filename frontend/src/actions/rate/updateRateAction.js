import {RATES_TYPE} from "../../constants/rateType";
import axiosAction from "../../axios/axiosConfig";

const updateRateAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: RATES_TYPE.UPDATE_RATE_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/rates/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: RATES_TYPE.UPDATE_RATE_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: RATES_TYPE.UPDATE_RATE_FAILED,
            });
            reject(err);
        });

    });
};

export default updateRateAction;