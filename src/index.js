import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import issueList from './issues/issueList';
import './index.css';
import IssueLarge from './issues/IssueLarge';

ReactDOM.render(
  <IssueLarge id="1" />,
  document.getElementById('root')
);
