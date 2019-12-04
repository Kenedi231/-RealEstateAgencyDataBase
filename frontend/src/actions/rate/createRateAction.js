import {RATES_TYPE} from "../../constants/rateType";
import axiosAction from "../../axios/axiosConfig";

const createRateAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: RATES_TYPE.CREATE_RATE_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/rates',
            data,
        }).then(result => {
            dispatch({
                type: RATES_TYPE.CREATE_RATE_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: RATES_TYPE.CREATE_RATE_FAILED,
            });
            reject(err);
        });

    });
};

export default createRateAction;