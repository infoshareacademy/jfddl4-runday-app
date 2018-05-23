import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';

import GoogleLogIn from './GoogleLogIn'
import firebase from 'firebase'
import { auth, googleProvider } from '../../firebase'
import Container from '../UI/Container';

export default class LoginForms extends React.Component {
  state = {


  }
  onGoogleLogInHandler = () => {


    auth.signInWithPopup(googleProvider).then((user) => {
      console.log('auth', user)
    })
      .catch((err) => {
        console.log('auth err', err)

      })


  }

  render() {
    return (
      <Container>
        <Tabs>
          <Tab label="Login" >
            <GoogleLogIn
              onGoogleLogInHandler={() => { this.onGoogleLogInHandler() }}
            />
          </Tab>
          <Tab label='Register'>
            <h1>Hello from registers</h1>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}