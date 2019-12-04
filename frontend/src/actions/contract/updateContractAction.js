import {CONTRACTS_TYPE} from "../../constants/contractType";
import axiosAction from "../../axios/axiosConfig";

const updateContractAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACTS_TYPE.UPDATE_CONTRACT_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/contract/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: CONTRACTS_TYPE.UPDATE_CONTRACT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACTS_TYPE.UPDATE_CONTRACT_FAILED,
            });
            reject(err);
        });

    });
};

export default updateContractAction;