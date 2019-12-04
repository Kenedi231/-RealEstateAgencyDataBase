import {CONTRACTS_TYPE} from "../../constants/contractType";
import axiosAction from "../../axios/axiosConfig";

const deleteContractAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACTS_TYPE.DELETE_CONTRACT_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/contract/${id}`,
        }).then(result => {
            dispatch({
                type: CONTRACTS_TYPE.DELETE_CONTRACT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACTS_TYPE.DELETE_CONTRACT_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteContractAction;