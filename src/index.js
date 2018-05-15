import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import App from './App';
import Auth from './components/Auth'

ReactDOM.render(
    <MuiThemeProvider>
        <Auth>
            <App />
        </Auth>
    </MuiThemeProvider>,
    document.getElementById('root')
)



