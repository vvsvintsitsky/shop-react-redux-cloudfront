import React from 'react';
import { createRoot } from 'react-dom/client';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    const status = error?.response?.status
    if (status === 400) {
      alert(error.response.data?.data);
    }

    if (status === 401) {
      console.error("Unauthorized 401")
      alert("Unauthorized 401")
    }

    if (status === 403) {
      console.error("Access denied 403")
      alert("Access denied 403")
    }

    if (error)

    return Promise.reject(error?.response ?? error);
  }
);

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
