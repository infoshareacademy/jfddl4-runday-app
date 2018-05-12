import React from 'react'
import CommunictaionLocationOn from 'material-ui/svg-icons/communication/location-on';

const Marker = ({ text }) => (
    <div>
        <CommunictaionLocationOn />
        {text} 
    </div>
)


export default Marker