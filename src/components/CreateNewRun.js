import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { TextField, RaisedButton } from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import Marker from './MapMarker'
import moment from 'moment'
import { getDistanceFromLatLonInKm } from './Methods/getDistanceFromLatLonInKm ';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { RunnersCount, CategoryOfRun } from './RunsSelectField';
class Map extends Component {
    state = {
        runName: '',
        runData: '',
        category: 'city',
        markers: [],
        distance: '',
        runners: 0
    }
    placeMarker = ({ lat, lng }) => {
        const markerData = { lat, lng, key: Date.now() }
        this.setState({
            markers: this.state.markers.concat(markerData),
            distance: getDistanceFromLatLonInKm(this.state.markers.concat(markerData))
        })
    }
    runNameChangeHandler = (e, value) => this.setState({ runName: value })
    newRunDataPickerHandler = (e, value) => this.setState({ runData: value })
    runnersCountChangeHandler = (e, idx, value) => this.setState({ runners: value })
    runCategoryChangeHandler = (e, idx, value) => this.setState({ category: value })
    
    saveRun = () => {
        this.setState({
            runName: '',
            runData: '',
            category: 'city',
            runners: 0
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
            <div style={{ textAlign: 'center' }}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={9} lg={9}>
                            <div style={{ height: '60vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
                                    defaultCenter={{ lat: 51.246452, lng: 22.568445 }}
                                    defaultZoom={15}
                                    onClick={this.placeMarker}
                                >
                                    {this.state.markers.map((marker, i) => <Marker text={i + 1} lat={marker.lat} lng={marker.lng} />)}
                                </GoogleMapReact>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <h2> Create new run </h2>
                            <TextField
                                floatingLabelText={'Run name'}
                                value={this.state.runName}
                                onChange={this.runNameChangeHandler}
                                fullWidth={true}
                            />
                            <CategoryOfRun
                                category={this.state.category}
                                onSelectChange={this.runCategoryChangeHandler}
                            />
                            <DatePicker
                                floatingLabelText="Choose date"
                                onChange={this.newRunDataPickerHandler}
                                autoOk={true}
                                formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                                fullWidth={true}
                            />
                            <RunnersCount
                                runners={this.state.runners}
                                onSelectChange={this.runnersCountChangeHandler}
                            />
                            <RaisedButton
                                label={'Create Run'}
                                onClick={this.saveRun}
                                fullWidth={true}
                                primary={true}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Map
