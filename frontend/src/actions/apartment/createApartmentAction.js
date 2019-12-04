import {APARTMENTS_TYPE} from "../../constants/apartmentType";
import axiosAction from "../../axios/axiosConfig";

const createApartmentAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: APARTMENTS_TYPE.CREATE_APARTMENT_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/apartments',
            data,
        }).then(result => {
            dispatch({
                type: APARTMENTS_TYPE.CREATE_APARTMENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: APARTMENTS_TYPE.CREATE_APARTMENT_FAILED,
            });
            reject(err);
        });

    });
};

export default createApartmentAction;