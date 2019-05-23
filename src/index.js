import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './issues/IssueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './layout/NavBar';

ReactDOM.render(
  <div>
    <NavBar />
    <IssueList />
    <IssueLarge id="1" />
  </div>,
  document.getElementById('root')
);
