import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getContractsAction from "../../../actions/contract/getContractsAction";
import createContractAction from "../../../actions/contract/createContractAction";
import deleteContractAction from "../../../actions/contract/deleteContractAction";
import updateContractAction from "../../../actions/contract/updateContractAction";

const mapStateToProps = state => ({
    contracts: state.contract.contracts,
});

const mapDispatchToProps = dispatch => ({
    getContractsAction: () => dispatch(getContractsAction()),
    createContractAction: (data) => dispatch(createContractAction(data)),
    deleteContractAction: (id) => dispatch(deleteContractAction(id)),
    updateContractAction: (data, id) => dispatch(updateContractAction(data, id)),
});

class ContractPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getContractsAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getContractsAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createContract = (data) => {
        this.loadingOn();
        this.props.createContractAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateContract = (data) => {
        this.loadingOn();
        this.props.updateContractAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteContract = (id) => {
        this.loadingOn();
        this.props.deleteContractAction(id).then(this.getData).catch(this.loadingOff);
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
        const {contracts} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_CONTRACT_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Contracts'
                    columns={columns}
                    data={contracts}
                    loading={loading}
                    createNewRow={this.createContract}
                    deleteRow={this.deleteContract}
                    updateRow={this.updateContract}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ContractPage);