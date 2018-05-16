import React from 'react'
import GoogleLogIn from './GoogleLogIn'
import { auth, googleProvider } from '../../firebase'

export default class LoginForms extends React.Component {
  state = {


  }
  onGoogleLogInHandler = () => {auth.signInWithPopup(googleProvider)}

  render() {
    return (
      <div>
        <GoogleLogIn
          onGoogleLogInHandler ={this.onGoogleLogInHandler}
        />
      </div>
    )
  }
}