import {PHOTOS_TYPE} from "../../constants/photoType";
import axiosAction from "../../axios/axiosConfig";

const updatePhotoAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTOS_TYPE.UPDATE_PHOTO_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/photos/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: PHOTOS_TYPE.UPDATE_PHOTO_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTOS_TYPE.UPDATE_PHOTO_FAILED,
            });
            reject(err);
        });

    });
};

export default updatePhotoAction;