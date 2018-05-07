import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

import Dashboard from './components/Dashboard'
import ListOfResults from './components/ListOfResults'
import RegistrationForm from './components/RegistrationForm'
import ResultsPage from './components/ResultsPage'
import SearchForm from './components/SearchForm'


const App = (props) => (

    <Router>
        <div>
            <Link to={'/'}><MenuItem>Dashboard</MenuItem> </Link>
            <Link to={'/ListOfResults'}><MenuItem>Listen of results</MenuItem> </Link>
            <Link to={'/RegistrationForm'}><MenuItem>Registration form</MenuItem> </Link>
            <Link to={'/ResultsPage'}><MenuItem>Result page</MenuItem> </Link>
            <Link to={'/SearchForm'}><MenuItem>Search form</MenuItem> </Link>

            <Route exact path={'/'} component={Dashboard}/>
            <Route exact path={'/ListOfResults'} component={ListOfResults}/>
            <Route path={'/RegistrationForm'} component={RegistrationForm}/>
            <Route path={'/ResultsPage'} component={ResultsPage}/>
            <Route path={'/SearchForm'} component={SearchForm}/>
        </div>
    </Router>

)


export default App;
