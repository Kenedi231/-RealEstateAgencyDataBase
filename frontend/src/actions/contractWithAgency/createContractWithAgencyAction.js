import {CONTRACT_WITH_AGENCY_TYPE} from "../../constants/contractWithAgencyType";
import axiosAction from "../../axios/axiosConfig";

const createContractWithAgencyAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/contract-with-agency',
            data,
        }).then(result => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.CREATE_CONTRACT_WITH_AGENCY_FAILED,
            });
            reject(err);
        });

    });
};

export default createContractWithAgencyAction;