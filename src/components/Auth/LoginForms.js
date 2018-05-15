import React from 'react'
import GoogleLogIn from './GoogleLogIn'
import { auth, provider } from '../../firebase'

export default class LoginForms extends React.Component {
  state = {


  }
  onGoogleLogInHandler = () => {auth.signInVithPopup(provider)}

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