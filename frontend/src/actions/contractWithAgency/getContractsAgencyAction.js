import {CONTRACT_WITH_AGENCY_TYPE} from "../../constants/contractWithAgencyType";
import axiosAction from "../../axios/axiosConfig";

const getContractsAgencyAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/contract-with-agency',
        }).then(result => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: CONTRACT_WITH_AGENCY_TYPE.GET_CONTRACT_WITH_AGENCY_FAILED,
            });

            reject(err);
        });
    });
};

export default getContractsAgencyAction;