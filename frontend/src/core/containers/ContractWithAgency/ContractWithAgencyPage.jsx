import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getContractsAgencyAction from "../../../actions/contractWithAgency/getContractsAgencyAction";
import createContractWithAgencyAction from "../../../actions/contractWithAgency/createContractWithAgencyAction";
import updateContractWithAgencyAction from "../../../actions/contractWithAgency/updateContractWithAgencyAction";
import deleteContractWithAgencyAction from "../../../actions/contractWithAgency/deleteContractWithAgencyAction";
import {withSnackbar} from "notistack";

const mapStateToProps = state => ({
    contractWithAgency: state.contractWithAgency.contractWithAgency,
});

const mapDispatchToProps = dispatch => ({
    getContractsAgencyAction: () => dispatch(getContractsAgencyAction()),
    createContractWithAgencyAction: (data) => dispatch(createContractWithAgencyAction(data)),
    deleteContractWithAgencyAction: (id) => dispatch(deleteContractWithAgencyAction(id)),
    updateContractWithAgencyAction: (data, id) => dispatch(updateContractWithAgencyAction(data, id)),
});

class ContractWithAgencyPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getContractsAgencyAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getContractsAgencyAction().then(() => {
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

    createContract = (data) => {
        this.loadingOn();
        this.props.createContractWithAgencyAction(data).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    updateContract = (data) => {
        this.loadingOn();
        this.props.updateContractWithAgencyAction(data, data.id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    deleteContract = (id) => {
        this.loadingOn();
        this.props.deleteContractWithAgencyAction(id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
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
        const {contractWithAgency} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_CONTRACT_WITH_AGENCY_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Contracts with agency'
                    columns={columns}
                    data={contractWithAgency}
                    loading={loading}
                    createNewRow={this.createContract}
                    deleteRow={this.deleteContract}
                    updateRow={this.updateContract}
                />
            </div>
        );
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps) (ContractWithAgencyPage));