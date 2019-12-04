import {CONTRACT_WITH_AGENCY_TYPE} from "../../constants/contractWithAgencyType";
import axiosAction from "../../axios/axiosConfig";

const updateContractWithAgencyAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACT_WITH_AGENCY_TYPE.UPDATE_CONTRACT_WITH_AGENCY_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/contract-with-agency/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.UPDATE_CONTRACT_WITH_AGENCY_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.UPDATE_CONTRACT_WITH_AGENCY_FAILED,
            });
            reject(err);
        });

    });
};

export default updateContractWithAgencyAction;