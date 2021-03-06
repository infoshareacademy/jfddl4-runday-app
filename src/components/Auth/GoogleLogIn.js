import React from 'react'
import { RaisedButton } from 'material-ui';

import style, { styleColors } from '../../style'

const GoogleLogIn = (props) =>
  <div>
    <RaisedButton
      backgroundColor={styleColors.danger}
      label={'Sign In With Google'}
      onClick={props.onGoogleLogInHandler}
      labelColor ={styleColors.standard}
      labelStyle={style.labelStyle}
    />
  </div>

export default GoogleLogIn