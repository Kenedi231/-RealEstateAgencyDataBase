import {PHOTO_CATALOGS_TYPE} from "../../constants/photoCatalogType";
import axiosAction from "../../axios/axiosConfig";

const deletePhotoCatalogAction = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: PHOTO_CATALOGS_TYPE.DELETE_PHOTO_CATALOG_REQUEST,
        });

        axiosAction({
            method: 'DELETE',
            url: `/photo-catalog/${id}`,
        }).then(result => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.DELETE_PHOTO_CATALOG_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: PHOTO_CATALOGS_TYPE.DELETE_PHOTO_CATALOG_FAILED,
            });
            reject(err);
        });

    });
};

export default deletePhotoCatalogAction;