import React from 'react'
import { RaisedButton } from 'material-ui';


const GoogleLogIn = (props) =>
  <div>
    <RaisedButton
      primary={true}
      label={'Google'}
      onClick={props.onGoogleLogInHandler}
    />
  </div>

export default GoogleLogIn