import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import App from './App';
import Auth from './components/Auth'

import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App />
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)



