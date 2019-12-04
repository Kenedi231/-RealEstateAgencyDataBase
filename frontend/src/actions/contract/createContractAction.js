import {CONTRACTS_TYPE} from "../../constants/contractType";
import axiosAction from "../../axios/axiosConfig";

const createContractAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACTS_TYPE.CREATE_CONTRACT_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/contract',
            data,
        }).then(result => {
            dispatch({
                type: CONTRACTS_TYPE.CREATE_CONTRACT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACTS_TYPE.CREATE_CONTRACT_FAILED,
            });
            reject(err);
        });

    });
};

export default createContractAction;