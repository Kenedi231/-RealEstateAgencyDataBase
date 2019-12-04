import {APARTMENTS_TYPE} from "../../constants/apartmentType";
import axiosAction from "../../axios/axiosConfig";

const deleteApartmentAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: APARTMENTS_TYPE.DELETE_APARTMENT_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/apartments/${id}`,
        }).then(result => {
            dispatch({
                type: APARTMENTS_TYPE.DELETE_APARTMENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: APARTMENTS_TYPE.DELETE_APARTMENT_FAILED,
            });
            reject(err);
        });

    });
};

export default deleteApartmentAction;