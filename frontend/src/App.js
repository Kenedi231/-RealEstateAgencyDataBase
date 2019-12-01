import React, {useState} from 'react';
import {connect} from 'react-redux';
import {simpleAction} from "./actions/simpleAction";

import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./utils/ButtonComponent/ButtonComponent";

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

function App(props) {
  const simpleAction = (event) => {
    props.simpleAction();
  };
  const [loading, setLoading] = useState(false);

  const onClick = () => {
      setLoading(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent
            text='Log In'
            loading={loading}
            onClick={onClick}
        />
      </header>
      <pre>
       {
         JSON.stringify(props)
       }
      </pre>
      <button onClick={simpleAction}>Test redux action</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
