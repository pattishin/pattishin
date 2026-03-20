import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
