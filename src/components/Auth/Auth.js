import React from 'react'
import { auth } from '../../firebase'
import LoginForms from './LoginForms'
import { logInByGoogle } from '../../state/auth'
export default class Auth extends React.Component {
  state = {
    isLoggedIn: false
  }
  componentDidMount() {
    auth.onAuthStateChanged(
        user => {
          console.log('onAuthStateChanged', user, this)
            if (user) {

                this.setState({ isLoggedIn: true })
            } else {
                this.setState({ isLoggedIn: false })
            }
        }
    )
}

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ?
            this.props.children
            :
            <LoginForms />
        }
      </div>
    )
  }
}

