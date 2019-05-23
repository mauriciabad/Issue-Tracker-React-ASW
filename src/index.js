import React from 'react';
import ReactDOM from 'react-dom';
import issueList from './issues/issueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './layout/NavBar';

ReactDOM.render(
  <div>
    <NavBar />
    <IssueLarge id="1" />
  </div>,
  document.getElementById('root')
);
