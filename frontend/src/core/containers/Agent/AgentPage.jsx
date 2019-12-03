import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    state: state,
});

const mapDispatchToProps = dispatch => ({
});

class AgentPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Apartment</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AgentPage);