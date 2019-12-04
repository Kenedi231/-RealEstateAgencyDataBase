import {CONTRACTS_TYPE} from "../../constants/contractType";
import axiosAction from "../../axios/axiosConfig";

const getContractsAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACTS_TYPE.GET_CONTRACTS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/contract',
        }).then(result => {
            dispatch({
                type: CONTRACTS_TYPE.GET_CONTRACTS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACTS_TYPE.GET_CONTRACTS_FAILED,
            });

            reject(err);
        });
    });
};

export default getContractsAction;