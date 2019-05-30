import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './issues/IssueList';
import IssueNew from './issues/IssueNew';
// import IssueListEnhansed from './issues/IssueListEnhansed';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

ReactDOM.render(
  <div>
    <NavBar />

    <div className="container">
      <Router>
        <Switch>
          {/* <Route exact path="/issues" component={IssueListEnhansed} /> */}
          <Route exact path="/issues" component={IssueList} />
          <Route path="/issues/new" component={IssueNew} />
          <Route path="/issues/:id" component={IssueLarge} />
          
          <Route render={() => <Redirect to="/issues" />} />
        </Switch>
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);
