import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getEmployerAction from "../../../actions/employer/getEmployerAction";
import createEmployerAction from "../../../actions/employer/createEmployerAction";
import deleteEmployerAction from "../../../actions/employer/deleteEmployerAction";
import updateEmployerAction from "../../../actions/employer/updateEmployerAction";
import {withSnackbar} from "notistack";

const mapStateToProps = state => ({
    employers: state.employer.employers,
});

const mapDispatchToProps = dispatch => ({
    getEmployerAction: () => dispatch(getEmployerAction()),
    createEmployerAction: (data) => dispatch(createEmployerAction(data)),
    deleteEmployerAction: (id) => dispatch(deleteEmployerAction(id)),
    updateEmployerAction: (data, id) => dispatch(updateEmployerAction(data, id)),
});

class EmployerPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getEmployerAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getEmployerAction().then(() => {
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

    createRow = (data) => {
        this.loadingOn();
        this.props.createEmployerAction(data).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updateEmployerAction(data, data.id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deleteEmployerAction(id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
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
        const {employers} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_DATA_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Employers'
                    columns={columns}
                    data={employers}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps) (EmployerPage));