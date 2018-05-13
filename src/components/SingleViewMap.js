import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './MapMarker'

const SingleViewMap = (props) =>

    <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
            defaultCenter={{ lat: props.markers[0].lat, lng: props.markers[0].lng }}
            defaultZoom={15}
        >
            {props.markers.map((marker, i) => <Marker text={i + 1} lat={marker.lat} lng={marker.lng} />)}
        </GoogleMapReact>
    </div>

export default SingleViewMap