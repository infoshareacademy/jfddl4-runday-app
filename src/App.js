import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import Dashboard from './components/Dashboard'
import ListOfResults from './components/ListOfResults'
import RegistrationForm from './components/RegistrationForm'
import CreateNewRun from './components/CreateNewRun'
import SearchForm from './components/SearchForm'
import SideBar from './components/SideBar'


class App extends React.Component {

  state = {
    isDrawerOpen: false
  }

  drawerBtnClickHandler = () => this.setState({
    isDrawerOpen: !this.state.isDrawerOpen
  })


  render() {
    return (

      <Router>
        <div>
          <AppBar
            title="RunDay"
            style={{ background: '#33691E' }}
            onLeftIconButtonClick={this.drawerBtnClickHandler}
          />

          <div>
            <SideBar
              onRequestSideBarChange={this.drawerBtnClickHandler}
              isSideBarOpen={this.state.isDrawerOpen}
            />

            <Route exact path={'/'} component={Dashboard} />
            <Route path={'/ListOfResults'} component={ListOfResults} />
            <Route path={'/RegistrationForm'} component={RegistrationForm} />
            <Route path={'/CreateNewRun'} component={CreateNewRun} />
            <Route path={'/SearchForm'} component={SearchForm} />
          </div>
        </div>
      </Router>

    )
  }


}


export default App;
