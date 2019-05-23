import React from 'react';
import ReactDOM from 'react-dom';
import IssueLarge from './issues/IssueLarge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueLarge />, div);
});
