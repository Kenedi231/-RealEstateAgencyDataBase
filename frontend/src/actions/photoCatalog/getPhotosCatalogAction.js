import {PHOTO_CATALOGS_TYPE} from "../../constants/photoCatalogType";
import axiosAction from "../../axios/axiosConfig";

const getPhotosCatalogAction = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_REQUEST,
        });

        axiosAction({
            method: 'GET',
            url: '/photo-catalog',
        }).then(result => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_FAILED,
            });

            reject(err);
        });
    });
};

export default getPhotosCatalogAction;