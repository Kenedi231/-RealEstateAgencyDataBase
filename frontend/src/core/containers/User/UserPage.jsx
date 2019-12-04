import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getUsersAction from "../../../actions/user/getUsersAction";
import createUserAction from "../../../actions/user/createUserAction";
import deleteUserAction from "../../../actions/user/deleteUserAction";
import updateUserAction from "../../../actions/user/updateUserAction";

const mapStateToProps = state => ({
    users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
    getUsersAction: () => dispatch(getUsersAction()),
    createUserAction: (data) => dispatch(createUserAction(data)),
    deleteUserAction: (id) => dispatch(deleteUserAction(id)),
    updateUserAction: (data, id) => dispatch(updateUserAction(data, id)),
});

class UserPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getUsersAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getUsersAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createUserAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updateUserAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deleteUserAction(id).then(this.getData).catch(this.loadingOff);
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
        const {users} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_USER_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Users'
                    columns={columns}
                    data={users}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserPage);