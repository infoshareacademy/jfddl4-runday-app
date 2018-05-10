import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

import Dashboard from './components/Dashboard'
import ListOfResults from './components/ListOfResults'
import RegistrationForm from './components/RegistrationForm'
import ResultsPage from './components/ResultsPage'
import SearchForm from './components/SearchForm'
import SideBar from './components/SideBar'
import ToDo from './components/ToDo'

class App extends React.Component {

    state = {
        isDrawerOpen: false
    }
    drawerBtnClickHandler = () => this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
    })


    render() {
        return (
            <div>
                <AppBar
                    title="RunDay"
                    style={{ background: '#33691E' }}
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                />
                <Router>
                    <div>
                        <SideBar
                            onRequestSideBarChange={this.drawerBtnClickHandler}
                            isSideBarOpen={this.state.isDrawerOpen}
                        />

                        <Route exact path={'/'} component={Dashboard}/>
                        <Route exact path={'/ListOfResults'} component={ListOfResults}/>
                        <Route path={'/RegistrationForm'} component={RegistrationForm}/>
                        <Route path={'/ResultsPage'} component={ResultsPage}/>
                        <Route path={'/SearchForm'} component={SearchForm}/>
                        <Route path={'/Todo'} component={ToDo}/>
                    </div>
                </Router>
            </div>
        )
    }


}


export default App;
