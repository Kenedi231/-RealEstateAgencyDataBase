import {PHOTO_CATALOGS_TYPE} from "../../constants/photoCatalogType";
import axiosAction from "../../axios/axiosConfig";

const createPhotoCatalogAction = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_REQUEST,
        });

        axiosAction({
            method: 'POST',
            url: '/photo-catalog',
            data,
        }).then(result => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_FAILED,
            });
            reject(err);
        });

    });
};

export default createPhotoCatalogAction;