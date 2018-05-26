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
import { logOut, getAllUsers1 } from './state/auth'
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
  
    fetch('https://runday-app.firebaseio.com/users.json')
    .then(r=>r.json()).then(data=> mapObjectToArray(data))
    .then(users=>{
      let logsArray = {} 
      users.forEach(user => {
        Object.values(Object.values(user)[0]).forEach(
          log => {
            let date = new Date(log.timestamp);
            let key = date.getFullYear() + `_` + (date.getMonth() +1) + `_` + (date.getDate()+1)
            if(logsArray.hasOwnProperty(key)) {
              logsArray[key] ++
            } else {
              logsArray[key] = 1
            }
          }
        )
      })
      return logsArray
    })
    .then(console.log)
    
    auth.onAuthStateChanged(
      user => {
        console.log('email', user.email) })
    
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
  getAllUsers: () => dispatch(getAllUsers1)
 })

export default connect(
  null,
  mapDispatchToProps)(App) 
