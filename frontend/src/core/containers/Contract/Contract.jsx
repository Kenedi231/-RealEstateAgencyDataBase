import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    state: state,
});

const mapDispatchToProps = dispatch => ({
});

class Contract extends React.Component {
    render() {
        return (
            <div>
                <h1>Contract</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Contract);