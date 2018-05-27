import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Dashboard from './components/Dashboard'
import CreateNewRun from './components/CreateNewRun'
import ListOfRun from './components/ListOfRun'
import SideBar from './components/SideBar'
import LinkButton from './components/LinkButton'
import { FlatButton } from 'material-ui';
import { logOut, getAllUsers1, loggedInUser } from './state/auth'
import { auth } from './firebase'
import { mapObjectToArray } from './components/methods/mapObjectToArray';


class App extends React.Component {

  state = {
    isDrawerOpen: false,
    allUsersLogs: []
  }

  componentDidMount() {


  }

  drawerBtnClickHandler = () => this.setState({
    isDrawerOpen: !this.state.isDrawerOpen
  })

  render() {
    console.log(this.props.user)
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

const mapStateToProps = state => ({
  user: state.auth.user
})
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  getAllUsers: () => dispatch(getAllUsers1),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App) 
