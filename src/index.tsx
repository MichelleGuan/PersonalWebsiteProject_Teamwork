import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore({ name: 'lee' });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react') as HTMLElement
);