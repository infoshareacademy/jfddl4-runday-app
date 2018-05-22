import React from 'react'
import GoogleLogIn from './GoogleLogIn'
import firebase from 'firebase'

import { auth, googleProvider } from '../../firebase'

export default class LoginForms extends React.Component {
  state = {


  }
  onGoogleLogInHandler = () => { 
    
    
    auth.signInWithPopup(googleProvider).then((user)=>{
      console.log('auth', user)
    })
    .catch((err)=>{
      console.log('auth err', err)

    })

  
  }

  render() {
    return (
      <div>
        <GoogleLogIn
          onGoogleLogInHandler={() => {this.onGoogleLogInHandler()}}
        />
      </div>
    )
  }
}