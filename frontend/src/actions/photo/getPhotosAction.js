import {PHOTOS_TYPE} from "../../constants/photoType";
import axiosAction from "../../axios/axiosConfig";

const getPhotosAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTOS_TYPE.GET_PHOTOS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/photos',
        }).then(result => {
            dispatch({
                type: PHOTOS_TYPE.GET_PHOTOS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTOS_TYPE.GET_PHOTOS_FAILED,
            });

            reject(err);
        });
    });
};

export default getPhotosAction;