import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getOwnerAction from "../../../actions/owner/getOwnerAction";
import createOwnerAction from "../../../actions/owner/createOwnerAction";
import updateOwnerAction from "../../../actions/owner/updateOwnerAction";
import deleteOwnerAction from "../../../actions/owner/deleteOwnerAction";

const mapStateToProps = state => ({
    owners: state.owner.owners,
});

const mapDispatchToProps = dispatch => ({
    getOwnerAction: () => dispatch(getOwnerAction()),
    createOwnerAction: (data) => dispatch(createOwnerAction(data)),
    deleteOwnerAction: (id) => dispatch(deleteOwnerAction(id)),
    updateOwnerAction: (data, id) => dispatch(updateOwnerAction(data, id)),
});

class OwnerPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getOwnerAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getOwnerAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createOwnerAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updateOwnerAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deleteOwnerAction(id).then(this.getData).catch(this.loadingOff);
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
        const {owners} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_DATA_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Owners'
                    columns={columns}
                    data={owners}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (OwnerPage);