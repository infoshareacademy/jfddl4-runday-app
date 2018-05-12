import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapsDirections, TextField, RaisedButton } from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'
class Map extends Component {
    state = {
        runName: '',
        runData: '',
        center: {
            lat: 51.246452,
            lng: 22.568445
        },
        markers: [],
        distanece: '',
        zoom: 11,
        runners : []
    };

    placeMarker = ({ lat, lng }) => {
        const markerData = { lat, lng }
        this.setState({
            markers: this.state.markers.concat(markerData),
        })
    }

    nameOfRunChangeHandler = (e, value) => this.setState({ runName: value })
    newRunDataPickerHandler = (e, value) => this.setState({ runData: value })

    saveRun = () => {
        fetch('https://runday-app.firebaseio.com/runs.json',
            {
                method: 'POST',
                body: JSON.stringify(this.state)
            }
        )
        this.placeMarker
        this.setState({
            markers: [],
            runName: '',
            runData: '',
            runners :['Pawel', 'Michal']
        })
        console.log(this.state)
    }

    render() {
        return (
            // Important! Always set the container height explicitl
            <div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        onClick={this.placeMarker}
                    >
                        {this.state.markers.map((marker, i) => <Marker text={i + 1} lat={marker.lat} lng={marker.lng} />)}
                    </GoogleMapReact>
                </div>
                <TextField
                    floatingLabelText={'Run name'}
                    value={this.state.runName}
                    onChange={this.nameOfRunChangeHandler}
                />
                <DatePicker 
                    hintText="Choose date"
                    onChange={this.newRunDataPickerHandler}
                    autoOk={true}
                    //formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                /> 
                <RaisedButton
                    label={'Create Run'}
                    onClick={this.saveRun}
                />

            </div>
        );
    }
}



//Maps Marker
const Marker = ({ text }) => (
    <div>
        {text}
    </div>
)




export default Map
