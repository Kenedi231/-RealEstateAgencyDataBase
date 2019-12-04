import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getDataAction from "../../../actions/data/getDataAction";
import createDataAction from "../../../actions/data/createDataAction";
import deleteDataAction from "../../../actions/data/deleteDataAction";
import updateDataAction from "../../../actions/data/updateDataAction";

const mapStateToProps = state => ({
    data: state.data.data,
});

const mapDispatchToProps = dispatch => ({
    getDataAction: () => dispatch(getDataAction()),
    createDataAction: (data) => dispatch(createDataAction(data)),
    deleteDataAction: (id) => dispatch(deleteDataAction(id)),
    updateDataAction: (data, id) => dispatch(updateDataAction(data, id)),
});

class DataPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getDataAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getDataAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createDataAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updateDataAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deleteDataAction(id).then(this.getData).catch(this.loadingOff);
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
        const {data} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_DATA_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Data'
                    columns={columns}
                    data={data}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DataPage);