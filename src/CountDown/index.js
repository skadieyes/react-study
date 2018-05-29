import React from 'react';
import ReactDOM from 'react-dom';
import CountDown from './CountDown';
ReactDOM.render(
  <CountDown startCount = {10}>
  {
    (count) => <div>{count}</div>
  }
  </CountDown>
  ,document.getElementById('root')
);
