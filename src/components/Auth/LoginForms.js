import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';

import GoogleLogIn from './GoogleLogIn'
import firebase from 'firebase'
import { auth, googleProvider } from '../../firebase'
import Container from '../UI/Container';
import CreateUserByEmailAndPassword from './CreateUserByEmailAndPassword';
import LogInByEmailAndPassword from './LogInByEmailAndPassword';
import { connect } from 'react-redux';
import { logInByGoogle } from '../../state/auth';

class LoginForms extends React.Component {
  state = {
  }
  onGoogleLogInHandler = () => {
    this.props.logInByGoogle();
    // auth.signInWithPopup(googleProvider)
    //   .then((user) => {
    //     console.log('auth', user)
    //   })
    //   .catch((err) => {
    //     console.log('auth err', err)
    //   })
  }

  render() {
    return (
      <Container>
        <Tabs>
          <Tab label="Login" style={{background: '#689F38'}} >
            <LogInByEmailAndPassword />
            <GoogleLogIn
              onGoogleLogInHandler={() => { this.onGoogleLogInHandler() }}
            />
          </Tab>
          <Tab label='Register' style={{background: '#B71C1C'}}>
            <CreateUserByEmailAndPassword />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logInByGoogle: () => dispatch(logInByGoogle()),
})

export default connect(null, mapDispatchToProps)(LoginForms);