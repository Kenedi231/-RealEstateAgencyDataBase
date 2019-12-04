import {PHOTO_CATALOGS_TYPE} from "../constants/photoCatalogType";


const initialState = {
    photoCatalogs: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_REQUEST:
        case PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_REQUEST:
        case PHOTO_CATALOGS_TYPE.DELETE_PHOTO_CATALOG_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_RECEIVED:
            return {
                photoCatalogs: action.payload,
                loading: false,
            };
        case PHOTO_CATALOGS_TYPE.GET_PHOTO_CATALOGS_FAILED:
        case PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_FAILED:
        case PHOTO_CATALOGS_TYPE.CREATE_PHOTO_CATALOG_RECEIVED:
        case PHOTO_CATALOGS_TYPE.DELETE_PHOTO_CATALOG_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}