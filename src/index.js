import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './issues/IssueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Container from '@material-ui/core/Toolbar';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <NavBar />

        <Container>
          <Switch>
            <Route exact path="/issues" component={IssueList} />
            <Route path="/issues/:id" component={IssueLarge} />
            
            <Route render={() => <Redirect to="/issues" />} />
          </Switch>
        </Container>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
