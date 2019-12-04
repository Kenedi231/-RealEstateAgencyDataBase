import COLUMN_TYPE from "../../../constants/columnType";

const getColumns = (name) => {
    switch (name) {
        case COLUMN_TYPE.DEFAULT_APARTMENT_COLUMNS:
            return DEFAULT_APARTMENT_COLUMNS;
        case COLUMN_TYPE.DEFAULT_AGENT_COLUMNS:
            return DEFAULT_AGENT_COLUMNS;
        case COLUMN_TYPE.DEFAULT_CONTRACT_COLUMNS:
            return DEFAULT_CONTRACT_COLUMNS;
        case COLUMN_TYPE.DEFAULT_CONTRACT_WITH_AGENCY_COLUMNS:
            return DEFAULT_CONTRACT_WITH_AGENCY_COLUMNS;
        case COLUMN_TYPE.DEFAULT_DATA_COLUMNS:
            return DEFAULT_DATA_COLUMNS;
        case COLUMN_TYPE.DEFAULT_RATE_COLUMNS:
            return DEFAULT_RATE_COLUMNS;
        case COLUMN_TYPE.DEFAULT_USER_COLUMNS:
            return DEFAULT_USER_COLUMNS;
        case COLUMN_TYPE.DEFAULT_PHOTO_COLUMNS:
            return DEFAULT_PHOTO_COLUMNS;
        case COLUMN_TYPE.DEFAULT_PHOTO_CATALOG_COLUMNS:
            return DEFAULT_PHOTO_CATALOG_COLUMNS;
        default:
            return DEFAULT_APARTMENT_COLUMNS;
    }
};

const DEFAULT_APARTMENT_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'ownerid', field: 'ownerid', type: 'numeric'},
    {title: 'rent_type', field: 'rent_type'},
    {title: 'house_type', field: 'house_type'},
    {title: 'district', field: 'district', type: 'numeric'},
    {title: 'address', field: 'address'},
    {title: 'count_rooms', field: 'count_rooms', type: 'numeric'},
    {title: 'bedrooms', field: 'bedrooms', type: 'numeric'},
    {title: 'cost', field: 'cost', type: 'numeric'},
    {title: 'bathroom', field: 'bathroom', lookup: {true: 'yes', false: 'no'}},
    {title: 'prepayment', field: 'prepayment', lookup: {true: 'yes', false: 'no'}},
    {title: 'document', field: 'document'},
    {title: 'internet', field: 'internet', lookup: {true: 'yes', false: 'no'}},
    {title: 'phone', field: 'phone', lookup: {true: 'yes', false: 'no'}},
    {title: 'living_space', field: 'living_space', type: 'numeric'},
    {title: 'floor', field: 'floor', type: 'numeric'},
    {title: 'leased', field: 'leased', lookup: {true: 'yes', false: 'no'}}
];

const DEFAULT_AGENT_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'address', field: 'address'},
    {title: 'fullname', field: 'fullname'},
    {title: 'passport', field: 'passport'},
    {title: 'phone', field: 'phone'},
    {title: 'reward', field: 'reward'},
];

const DEFAULT_CONTRACT_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'apartmentid', field: 'apartmentid'},
    {title: 'employerid', field: 'employerid'},
    {title: 'ownerid', field: 'ownerid'},
    {title: 'roommates', field: 'roommates', lookup: {true: 'yes', false: 'no'}},
    {title: 'date', field: 'date', type: 'date'},
    {title: 'validity', field: 'validity', type: 'date'},
];

const DEFAULT_CONTRACT_WITH_AGENCY_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'apartmentid', field: 'apartmentid'},
    {title: 'ownerid', field: 'ownerid'},
    {title: 'agentid', field: 'agentid'},
    {title: 'rateid', field: 'rateid'},
    {title: 'date', field: 'date', type: 'date'},
];

const DEFAULT_DATA_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'fullname', field: 'fullname'},
    {title: 'address', field: 'address'},
    {title: 'passport', field: 'passport'},
    {title: 'phone', field: 'phone'},
];

const DEFAULT_RATE_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'name', field: 'name'},
    {title: 'reward', field: 'reward'},
    {title: 'count', field: 'count', type: 'numeric'},
];

const DEFAULT_USER_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'username', field: 'username'},
    {title: 'password', field: 'password'},
    {title: 'agentid', field: 'agentid', type: 'numeric'},
    {title: 'access', field: 'access', lookup: {true: 'yes', false: 'no'}},
];

const DEFAULT_PHOTO_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'name', field: 'name'},
    {title: 'path', field: 'path'},
];

const DEFAULT_PHOTO_CATALOG_COLUMNS = [
    {title: 'id', field: 'id', type: 'numeric', editable: 'never'},
    {title: 'add_info', field: 'add_info'},
    {title: 'schema', field: 'schema'},
    {title: 'photosid', field: 'photos', type: 'numeric'},
    {title: 'number', field: 'number', type: 'numeric'},
    {title: 'year_of_construction', field: 'year_of_construction', type: 'numeric'},
    {title: 'year_overhaul', field: 'year_overhaul', type: 'numeric'},
    {title: 'appliances', field: 'appliances', lookup: {true: 'yes', false: 'no'}},
    {title: 'furniture', field: 'furniture', lookup: {true: 'yes', false: 'no'}},
];

export default getColumns;

/*
add_info: "The best house"
appliances: true
furniture: true
id: 1
number: 3
photos: 2
schema: "path"
square: null
year_of_construction: 2017
year_overhaul: 2018
*/