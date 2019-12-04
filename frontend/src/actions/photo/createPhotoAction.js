import {PHOTOS_TYPE} from "../../constants/photoType";
import axiosAction from "../../axios/axiosConfig";

const createPhotoAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTOS_TYPE.CREATE_PHOTO_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/photos',
            data,
        }).then(result => {
            dispatch({
                type: PHOTOS_TYPE.CREATE_PHOTO_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTOS_TYPE.CREATE_PHOTO_FAILED,
            });
            reject(err);
        });

    });
};

export default createPhotoAction;