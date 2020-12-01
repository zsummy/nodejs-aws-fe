import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';

// localStorage.setItem('login', 'zsummy');
// localStorage.setItem('password', 'TEST_PASSWORD');

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    const status = error.response?.status;
    if (status === 400) {
      alert(error.response.data?.data);
    } else if (status === 401) {
      alert('Unauthorized');
    } else if (status === 403) {
      alert('Forbidden');
    }
    return Promise.reject(error.response);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
