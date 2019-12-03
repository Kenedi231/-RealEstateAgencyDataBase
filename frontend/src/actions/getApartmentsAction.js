import {APARTMENTS_TYPE} from "../constants/apartmentType";
import axiosAction from "../axios/axiosConfig";

const getApartmentsAction = () => dispatch => {
    dispatch({
        type: APARTMENTS_TYPE.GET_APARTMENTS_REQUEST,
    });

    axiosAction({
        method: 'GET',
        url: '/apartments',
    }).then(result => {
        dispatch({
            type: APARTMENTS_TYPE.GET_APARTMENTS_RECEIVED,
            payload: result.data,
        })
    }).catch(err => {
        dispatch({
            type: APARTMENTS_TYPE.GET_APARTMENTS_FAILED,
        })
    });
};

export default getApartmentsAction;