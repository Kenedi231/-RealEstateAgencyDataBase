import {RATES_TYPE} from "../../constants/rateType";
import axiosAction from "../../axios/axiosConfig";

const getRatesAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: RATES_TYPE.GET_RATES_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/rates',
        }).then(result => {
            dispatch({
                type: RATES_TYPE.GET_RATES_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: RATES_TYPE.GET_RATES_FAILED,
            });

            reject(err);
        });
    });
};

export default getRatesAction;