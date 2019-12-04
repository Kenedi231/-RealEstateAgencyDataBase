import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getRatesAction from "../../../actions/rate/getRatesAction";
import createRateAction from "../../../actions/rate/createRateAction";
import updateRateAction from "../../../actions/rate/updateRateAction";
import deleteRateAction from "../../../actions/rate/deleteRateAction";

const mapStateToProps = state => ({
    rates: state.rate.rates,
});

const mapDispatchToProps = dispatch => ({
    getRatesAction: () => dispatch(getRatesAction()),
    createRateAction: (data) => dispatch(createRateAction(data)),
    deleteRateAction: (id) => dispatch(deleteRateAction(id)),
    updateRateAction: (data, id) => dispatch(updateRateAction(data, id)),
});

class RatePage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getRatesAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getRatesAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createRateAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updateRateAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deleteRateAction(id).then(this.getData).catch(this.loadingOff);
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
        const {rates} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_RATE_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Rates'
                    columns={columns}
                    data={rates}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RatePage);