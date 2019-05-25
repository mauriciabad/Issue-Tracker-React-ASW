import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './issues/IssueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

ReactDOM.render(
  <div>

    <Router>
      <div>
        <NavBar />

        <Switch>
        <Route exact path="/issues" component={IssueList} />
        <Route path="/issues/:id" component={IssueLarge} />
        
        <Route render={() => <Redirect to="/issues" />} />
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
