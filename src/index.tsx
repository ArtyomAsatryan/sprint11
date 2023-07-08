import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import { store } from './services/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

root.render(
    <React.StrictMode>
      <Router >
      <Provider store={store}>
        <App />
      </Provider>
      </Router>
    </React.StrictMode>
);
