import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Dashboard from './components/Dashboard'
import CreateNewRun from './components/CreateNewRun'
import ListOfRun from './components/ListOfRun'
import SideBar from './components/SideBar'
import LinkButton from './components/LinkButton'
import { FlatButton, RaisedButton } from 'material-ui';
import { logOut } from './state/auth'

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
        <Router>
          <div>
            <AppBar
              title="RunDay"
              onLeftIconButtonClick={this.drawerBtnClickHandler}
              iconElementRight={<FlatButton onClick={this.props.logOut} label="Log out" />}
            />

            <div>
              <SideBar
                onRequestSideBarChange={this.drawerBtnClickHandler}
                isSideBarOpen={this.state.isDrawerOpen}
              />

              <Route exact path={'/'} component={Dashboard} />
              <Route path={'/CreateNewRun'} component={CreateNewRun} />
              <Route path={'/ListOfRun'} component={ListOfRun} />
            </div>
          </div>
        </Router>
        <LinkButton />
      </div>
    )
  }


}
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(
  null,
  mapDispatchToProps)(App) 
