import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { connect } from 'react-redux';

const AppInner = ({
  isLoggedIn
}) => {

  return (
    <Router className="App">
      <Routes isAuthorized={ isLoggedIn } />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export const App = connect(mapStateToProps)(AppInner);
