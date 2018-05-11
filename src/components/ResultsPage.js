import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
    state = {
        center: {
            lat: 51.246452,
            lng: 22.568445
        },
        markers: [],
        zoom: 11
    };

    placeMarker = ({ lat, lng }) => {
        const markerData = { lat, lng }
        this.setState({
            markers: this.state.markers.concat(markerData),
        })
        console.log(this.state.markers)
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    onClick={this.placeMarker}
                >
                    {/* <div lat={this.state.center.lat} lng={this.state.center.lng}>
                        tutaj
                    </div> */}
                    {this.state.markers.map((marker, i) => <Marker text={i+1} lat={marker.lat} lng={marker.lng}/>)}
                </GoogleMapReact>
            </div>
        );
    }
}

const Marker = ({text}) => (
    <div>
        {text}
    </div>
)

export default SimpleMap;
