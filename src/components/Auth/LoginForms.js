import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { auth } from '../../firebase'
import Container from '../UI/Container';
import CreateUserByEmailAndPassword from './CreateUserByEmailAndPassword';
import LogInByEmailAndPassword from './LogInByEmailAndPassword';
import { connect } from 'react-redux';
import { logInByGoogle, logInByMailAndPass, createUser } from '../../state/auth';

class LoginForms extends React.Component {
  state = {
    logInEmail: '',
    logInPassword: '',
    createUserEmail: '',
    createUserPassword: '',
    createUserRetypePassword: ''
  }
  onGoogleLogInHandler = () => { this.props.logInByGoogle() }

  onLogInEmailChange = (e, value) => this.setState({ logInEmail: value })
  onLogInPasswodChange = (e, value) => this.setState({ logInPassword: value })
  onCreateUserEmailChange = (e, value) => this.setState({ createUserEmail: value })
  onCreateUserPasswodChange = (e, value) => this.setState({ createUserPassword: value })
  onCreateUserRetypePasswodChange = (e, value) => this.setState({ createUserRetypePassword: value })

  render() {
    return (
      <Container>
        <Tabs>
          <Tab label="Login" style={{ background: '#689F38' }} >
            <LogInByEmailAndPassword
              emailValue={this.state.logInEmail}
              onEmailChange={this.onLogInEmailChange}
              passwordValue={this.state.logInPassword}
              onPasswordChange={this.onLogInPasswodChange}
              onLogInClick={
                () => { this.props.logInByEmailAndPassword(this.state.logInEmail, this.state.logInPassword) 
                }}
              onGoogleLogInHandler={() => { this.onGoogleLogInHandler() }}
            />
          </Tab>
          <Tab label='Register' style={{ background: '#B71C1C' }}>
            <CreateUserByEmailAndPassword
              emailValue={this.state.createUserEmail}
              onEmailChange={this.onCreateUserEmailChange}
              passwordValue={this.state.createUserPassword}
              onPasswordChange={this.onCreateUserPasswodChange}
              retypePasswordValue={this.state.createUserRetypePassword}
              onRetypePasswordChange={this.onCreateUserRetypePasswodChange}
              onRegisterClick={() => 
                this.props.createUserByEmailAndPassword(
                  this.state.createUserEmail, this.state.createUserPassword, this.state.createUserRetypePassword)
              }
            />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logInByGoogle: () => dispatch(logInByGoogle()),
  logInByEmailAndPassword: (email, password) => dispatch(logInByMailAndPass(email, password)),
  createUserByEmailAndPassword: (email, password, passwordRetyped) => dispatch(createUser(email, password, passwordRetyped))
})

export default connect(null, mapDispatchToProps)(LoginForms);