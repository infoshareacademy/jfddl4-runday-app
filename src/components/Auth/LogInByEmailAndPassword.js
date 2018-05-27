import React from 'react'

import { TextField, RaisedButton, Divider } from 'material-ui'
import Container from '../UI/Container';
import GoogleLogIn from './GoogleLogIn';
import Email from 'material-ui/svg-icons/communication/mail-outline'
import Lock from 'material-ui/svg-icons/action/lock-outline'
import style, { styleColors } from '../../style'


const LogInByEmailAndPassword = (props) => (
  <Container>
    <div style={style.containerLogs}>
      <h4>Log in with exisiting user</h4>
      <div style={style.textFieldAlign}>
        <Email />
        <TextField
          name={'email'}
          type={'email'}
          placeholder={'Your email address'}
          value={props.emailValue}
          onChange={props.onEmailChange}
          style={style.textFieldMargin}
          floatingLabelFocusStyle={{ color: styleColors.blue }}
          underlineFocusStyle={{ borderColor: styleColors.blue }}
        />
      </div>
      <div style={style.textFieldAlign}>
        <Lock />
        <TextField
          name={'password'}
          type={'password'}
          placeholder={'Your password'}
          value={props.passwordValue}
          onChange={props.onPasswordChange}
          style={style.textFieldMargin}
          floatingLabelFocusStyle={{ color: styleColors.blue }}
          underlineFocusStyle={{ borderColor: styleColors.blue }}
        />
      </div>
      <RaisedButton
        backgroundColor={style.loginButton}
        style={style.loginButtonFill}
        label={'Login!'}
        onClick={props.onLogInClick}
        labelColor={styleColors.white}
        labelStyle={style.labelStyle}
      />
      <Divider />
      <h4> OR </h4>
      <GoogleLogIn
        onGoogleLogInHandler={props.onGoogleLogInHandler}
      />
    </div>
  </Container>
)

export default LogInByEmailAndPassword