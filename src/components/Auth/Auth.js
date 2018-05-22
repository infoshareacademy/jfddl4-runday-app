import React from 'react'
import { auth } from '../../firebase'
import LoginForms from './LoginForms'
import { logInByGoogle, loggedIn } from '../../state/auth'
import {set, initRunsSync} from '../../state/runs'

import {connect} from 'react-redux'
class Auth extends React.Component {
  state = {
    isLoggedIn: false
  }
  componentDidMount() {
    auth.onAuthStateChanged(
        user => {
          console.log('onAuthStateChanged', user,  this.props.auth  )
         
            if (user) {
               this.props.actions.login(user)
               this.props.actions.initNewRuns()
               ///
               console.log('onAuthStateChanged',   this.props  )
              
                // this.setState({ isLoggedIn: true })
            } else {
                // this.setState({ isLoggedIn: false })
            }
        }
    )
}

  render() {
    return (
      <div>
        {
         this.props.auth.isLoggedIn ?
            this.props.children
            :
            <LoginForms />
        }
      </div>
    )
  }
}

const mapStateToProps = (state)=>({ ...state })

const mapDispatchToProps = (dispatch)=>({actions:{
  login:(user)=>dispatch(loggedIn(user)),
  initNewRuns:()=>initRunsSync()(dispatch)
}})

export default connect(mapStateToProps,mapDispatchToProps)(Auth)