import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import issueList from './issues/issueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';
import NavBar from './NavBar';

ReactDOM.render(
  <div>
    <NavBar />
    <IssueLarge id="1" />
  </div>,
  document.getElementById('root')
);
