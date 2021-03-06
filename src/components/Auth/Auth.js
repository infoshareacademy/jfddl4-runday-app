import React from 'react'
import LoginForms from './LoginForms'
import { initAuthUserSync } from '../../state/auth'
import { initRunsSync } from '../../state/runs'

import { connect } from 'react-redux'
class Auth extends React.Component {
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

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => ({
  actions: {
    login: (user) => dispatch(initAuthUserSync(user)),
    initNewRuns: () => initRunsSync()(dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)