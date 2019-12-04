import {PHOTOS_TYPE} from "../../constants/photoType";
import axiosAction from "../../axios/axiosConfig";

const deletePhotoAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTOS_TYPE.DELETE_PHOTO_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/photos/${id}`,
        }).then(result => {
            dispatch({
                type: PHOTOS_TYPE.DELETE_PHOTO_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTOS_TYPE.DELETE_PHOTO_FAILED,
            });
            reject(err);
        });

    });
};

export default deletePhotoAction;