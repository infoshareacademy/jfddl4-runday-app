import React from 'react'
import { auth } from 'firebase'
import LoginForms from './LoginForms'
export default class Auth extends React.Component {
  state = {
    isLogedIn: true
  }

  render() {
    return (
      <div>
        {
          !this.state.isLogedIn ?
            <LoginForms />
            :
            this.props.children
        }
      </div>
    )
  }
}

