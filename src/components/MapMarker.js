import React from 'react'
import CommunictaionLocationOn from 'material-ui/svg-icons/communication/location-on';

const Marker = (props) => (
    <div key={props.i}>
        <CommunictaionLocationOn style={{color: 'red'}}/>
        {props.text}
    </div>
)


export default Marker