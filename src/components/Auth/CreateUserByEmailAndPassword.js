import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import Email from 'material-ui/svg-icons/communication/mail-outline'
import Lock from 'material-ui/svg-icons/action/lock'
import LockOpen from 'material-ui/svg-icons/action/lock-open'

import Container from '../UI/Container'
import style, { styleColors } from '../../style'

const CreateUserByEmailAndPassword = (props) => (
    <Container>
        <div style={style.containerLogs}>
            <h4>Create new user</h4>
            <div style={style.textFieldAlign}>
                <Email />
                <TextField
                    name={'email'}
                    type={'email'}
                    placeholder={'Your email address'}
                    value={props.emailValue}
                    onChange={props.onEmailChange}
                    style={style.textFieldMargin}
                    floatingLabelFocusStyle={{ color: styleColors.secondary }}
                    underlineFocusStyle={{ borderColor: styleColors.secondary }}
                />
            </div>
            <div style={style.textFieldAlign}>
                <LockOpen />
                <TextField
                    name={'password'}
                    type={'password'}
                    placeholder={'Create a password'}
                    value={props.passwordValue}
                    onChange={props.onPasswordChange}
                    style={style.textFieldMargin}
                    floatingLabelFocusStyle={{ color: styleColors.secondary }}
                    underlineFocusStyle={{ borderColor: styleColors.secondary }}
                />
            </div>
            <div style={style.textFieldAlign}>
                <Lock />
                <TextField
                    name={'retype-password'}
                    type={'password'}
                    placeholder={'Retype your password'}
                    value={props.retypePasswordValue}
                    onChange={props.onRetypePasswordChange}
                    style={style.textFieldMargin}
                    floatingLabelFocusStyle={{ color: styleColors.secondary }}
                    underlineFocusStyle={{ borderColor: styleColors.secondary }}
                />
            </div>
            <RaisedButton
                label={'Register!'}
                style={style.loginButtonFill}
                onClick={props.onRegisterClick}
                backgroundColor={styleColors.primary}
                labelColor={styleColors.standard}
                labelStyle={style.labelStyle}
            />
        </div>
    </Container>
)

export default CreateUserByEmailAndPassword