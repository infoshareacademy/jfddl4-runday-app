import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Container from '../UI/Container';
import CreateUserByEmailAndPassword from './CreateUserByEmailAndPassword';
import LogInByEmailAndPassword from './LogInByEmailAndPassword';
import { connect } from 'react-redux';
import { logInByGoogle, logInByMailAndPass, createUser } from '../../state/auth';
import style from '../../style'
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
        <div style={style.containerLoginForms}>
          <h2>Run Day</h2>
          <Tabs>
            <Tab
              icon={<MapsPersonPin />}
              label="Login" style={style.loginStyle} >
              <LogInByEmailAndPassword
                emailValue={this.state.logInEmail}
                onEmailChange={this.onLogInEmailChange}
                passwordValue={this.state.logInPassword}
                onPasswordChange={this.onLogInPasswodChange}
                onLogInClick={
                  () => {
                    this.props.logInByEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
                  }}
                onGoogleLogInHandler={() => { this.onGoogleLogInHandler() }}
              />
            </Tab>
            <Tab
              icon={<PersonAdd />}
              label='Register' style={style.registerStyle}>
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
        </div>
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