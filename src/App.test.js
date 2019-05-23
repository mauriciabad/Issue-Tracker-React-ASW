import React from 'react';
import ReactDOM from 'react-dom';
import IssueLarge from './IssueLarge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<IssueLarge />, div);
});
