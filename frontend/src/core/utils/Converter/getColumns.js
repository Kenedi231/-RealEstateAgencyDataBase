import COLUMN_TYPE from "../../../constants/columnType";

const getColumns = (name) => {
    switch (name) {
        case COLUMN_TYPE.DEFAULT_APARTMENT_COLUMNS:
            return DEFAULT_APARTMENT_COLUMNS;
    }
};

const DEFAULT_APARTMENT_COLUMNS = [
    {title: 'id', field: 'id'},
    {title: 'ownerid', field: 'ownerid'},
    {title: 'rent_type', field: 'rent_type'},
    {title: 'house_type', field: 'house_type'},
    {title: 'district', field: 'district'},
    {title: 'address', field: 'address'},
    {title: 'count_rooms', field: 'count_rooms'},
    {title: 'bedrooms', field: 'bedrooms'},
    {title: 'cost', field: 'cost'},
    {title: 'bathroom', field: 'bathroom', lookup: {true: 'yes', false: 'no'}},
    {title: 'prepayment', field: 'prepayment', lookup: {true: 'yes', false: 'no'}},
    {title: 'document', field: 'document'},
    {title: 'internet', field: 'internet', lookup: {true: 'yes', false: 'no'}},
    {title: 'phone', field: 'phone', lookup: {true: 'yes', false: 'no'}},
    {title: 'living_space', field: 'living_space'},
    {title: 'floor', field: 'floor'},
    {title: 'leased', field: 'leased', lookup: {true: 'yes', false: 'no'}}
];

export default getColumns;