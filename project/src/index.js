import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'

if (module.hot) {
    module.hot.accept('./App', () => {
        render(require('./App').default);
    });
}
render(App);

serviceWorker.register();
function render(App) {
    ReactDOM.hydrate(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root')
    );
}
serviceWorker.unregister();
