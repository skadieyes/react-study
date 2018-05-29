import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {view as CitySelector} from './weather-redux/city-selector/';
import {view as Weather} from './weather-redux/weather/';
import store from './weather-redux/Store.js'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <div>
  <CitySelector />
  <Weather />
</div>
  </Provider>,
  document.getElementById('root')
);
