import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import StudyForm from './components/StudyForm';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('main-content')
);

registerServiceWorker();
