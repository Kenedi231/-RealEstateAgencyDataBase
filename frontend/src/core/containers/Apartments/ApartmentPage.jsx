import React from 'react';
import {connect} from "react-redux";
import getApartmentsAction from "../../../actions/apartment/getApartmentsAction";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import createApartmentAction from "../../../actions/apartment/createApartmentAction";
import deleteApartmentAction from "../../../actions/apartment/deleteApartmentAction";
import updateApartmentAction from "../../../actions/apartment/updateApartmentAction";
import {withSnackbar} from "notistack";

const mapStateToProps = state => ({
    apartments: state.apartment.apartments,
});

const mapDispatchToProps = dispatch => ({
    getApartmentsAction: () => dispatch(getApartmentsAction()),
    createApartmentAction: (data) => dispatch(createApartmentAction(data)),
    deleteApartmentAction: (id) => dispatch(deleteApartmentAction(id)),
    updateApartmentAction: (data, id) => dispatch(updateApartmentAction(data, id)),
});

class ApartmentPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getApartmentsAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getApartments = () => {
        this.props.getApartmentsAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    showMessage = () => {
        this.props.enqueueSnackbar('Data successfully updated!', {
            variant: 'success',
        });
    };

    createApartment = (data) => {
        this.loadingOn();
        const dataForSend = {
            ownerid: data.ownerid,
            rentType: data.rent_type,
            houseType: data.house_type,
            district: data.district,
            address: data.address,
            countRooms: data.count_rooms,
            bedrooms: data.bedrooms,
            bathroom: data.bathroom,
            cost: data.cost,
            prepayment: data.prepayment,
            document: data.document,
            internet: data.internet,
            phone: data.phone,
            livingSpace: data.living_space,
            floor: data.floor,
            leased: data.leased,
        };
        this.props.createApartmentAction(dataForSend).then(this.getApartments).then(this.showMessage).catch(this.loadingOff);
    };

    updateApartment = (data) => {
        this.loadingOn();
        const dataForSend = {
            ownerid: data.ownerid,
            rentType: data.rent_type,
            houseType: data.house_type,
            district: data.district,
            address: data.address,
            countRooms: data.count_rooms,
            bedrooms: data.bedrooms,
            bathroom: data.bathroom,
            cost: data.cost,
            prepayment: data.prepayment,
            document: data.document,
            internet: data.internet,
            phone: data.phone,
            livingSpace: data.living_space,
            floor: data.floor,
            leased: data.leased,
        };
        this.props.updateApartmentAction(dataForSend, data.id).then(this.getApartments).then(this.showMessage).catch(this.loadingOff);
    };

    deleteApartment = (id) => {
        this.loadingOn();
        this.props.deleteApartmentAction(id).then(this.getApartments).then(this.showMessage).catch(this.loadingOff);
    };

    loadingOn = () => {
        this.setState({
            loading: true,
        });
    };

    loadingOff = () => {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1000);
    };

    render() {
        const {apartments} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_APARTMENT_COLUMNS);

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
                    loading={loading}
                    createNewRow={this.createApartment}
                    deleteRow={this.deleteApartment}
                    updateRow={this.updateApartment}
                />
            </div>
        );
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps) (ApartmentPage));