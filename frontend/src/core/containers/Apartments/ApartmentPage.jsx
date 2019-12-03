import React from 'react';
import {connect} from "react-redux";
import getApartmentsAction from "../../../actions/getApartmentsAction";
import {Link} from "react-router";
import getKeysFromObj from "../../utils/Converter/converter";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";

const mapStateToProps = state => ({
    apartments: state.apartment.apartments,
    loading: state.apartment.loading,
});

const mapDispatchToProps = dispatch => ({
    getApartmentsAction: () => dispatch(getApartmentsAction()),
});

class ApartmentPage extends React.Component {
    componentDidMount() {
        this.props.getApartmentsAction();
    }

    render() {
        const {apartments, loading} = this.props;
        let headers = [];
        let columns = [];
        if (apartments.length) {
            headers = getKeysFromObj(apartments[0]);
            columns = getColumns(COLUMN_TYPE.DEFAULT_APARTMENT_COLUMNS);
        }

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Apartments'
                    columns={columns}
                    data={apartments}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ApartmentPage);