import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { TextField, RaisedButton } from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Marker from './MapMarker'
import moment from 'moment'
import { getDistanceFromLatLonInKm } from './Methods/getDistanceFromLatLonInKm ';

class Map extends Component {
    state = {
        runName: '',
        runData: '',
        category: '',
        markers: [],
        distance: '',
        runners: []
    };

    placeMarker = ({lat, lng}) => {
        const markerData = { lat, lng, key: Date.now() }
        this.setState({
            markers: this.state.markers.concat(markerData),
            distance: getDistanceFromLatLonInKm(this.state.markers.concat(markerData))
        })

    }

    runNameChangeHandler = (e, value) => this.setState({ runName: value })
    newRunDataPickerHandler = (e, value) => this.setState({ runData: value })

    saveRun = () => {
        this.setState({
            runName: '',
            runData: '',
            runners: ['Pawel', 'Michal']
        })
        fetch('https://runday-app.firebaseio.com/runs.json',
            {
                method: 'POST',
                body: JSON.stringify(this.state)
            }
        )
        console.log(this.state)
    }

    render() {
        return (
            // Important! Always set the container height explicitl
            <div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
                        defaultCenter={{ lat: 51.246452, lng: 22.568445 }}
                        defaultZoom={14.5}
                        onClick={this.placeMarker}
                    >
                        {this.state.markers.map((marker, i) => <Marker text={i + 1} lat={marker.lat} lng={marker.lng} />)}
                    </GoogleMapReact>
                </div>
                <TextField
                    floatingLabelText={'Run name'}
                    value={this.state.runName}
                    onChange={this.runNameChangeHandler}
                />
                <DatePicker
                    hintText="Choose date"
                    onChange={this.newRunDataPickerHandler}
                    autoOk={true}
                    formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                />

                <RaisedButton
                    label={'Create Run'}
                    onClick={this.saveRun}
                />

            </div>
        );
    }
}


export default Map
