import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getAgentsAction from "../../../actions/agent/getAgentsAction";
import deleteAgentAction from "../../../actions/agent/deleteAgentAction";
import createAgentAction from "../../../actions/agent/createAgentAction";
import updateAgentAction from "../../../actions/agent/updateAgentAction";

const mapStateToProps = state => ({
    agents: state.agent.agents,
});

const mapDispatchToProps = dispatch => ({
    getAgentsAction: () => dispatch(getAgentsAction()),
    createAgentAction: (data) => dispatch(createAgentAction(data)),
    deleteAgentAction: (id) => dispatch(deleteAgentAction(id)),
    updateAgentAction: (data, id) => dispatch(updateAgentAction(data, id)),
});

class AgentPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getAgentsAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getAgents = () => {
        this.props.getAgentsAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createAgent = (data) => {
        this.loadingOn();
        this.props.createAgentAction(data).then(this.getAgents).catch(this.loadingOff);
    };

    updateAgent = (data) => {
        this.loadingOn();
        this.props.updateAgentAction(data, data.id).then(this.getAgents).catch(this.loadingOff);
    };

    deleteAgent = (id) => {
        this.loadingOn();
        this.props.deleteAgentAction(id).then(this.getAgents).catch(this.loadingOff);
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
        const {agents} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_AGENT_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Agents'
                    columns={columns}
                    data={agents}
                    loading={loading}
                    createNewRow={this.createAgent}
                    deleteRow={this.deleteAgent}
                    updateRow={this.updateAgent}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AgentPage);