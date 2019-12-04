import {PHOTOS_TYPE} from "../constants/photoType";


const initialState = {
    photos: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_TYPE.GET_PHOTOS_REQUEST:
        case PHOTOS_TYPE.CREATE_PHOTO_REQUEST:
        case PHOTOS_TYPE.DELETE_PHOTO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PHOTOS_TYPE.GET_PHOTOS_RECEIVED:
            return {
                photos: action.payload,
                loading: false,
            };
        case PHOTOS_TYPE.GET_PHOTOS_FAILED:
        case PHOTOS_TYPE.CREATE_PHOTO_FAILED:
        case PHOTOS_TYPE.CREATE_PHOTO_RECEIVED:
        case PHOTOS_TYPE.DELETE_PHOTO_RECEIVED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}