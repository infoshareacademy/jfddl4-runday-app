import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { TextField } from 'material-ui'
import DatePicker from 'material-ui/DatePicker'
import Marker from './MapMarker'
import moment from 'moment'
import { getDistanceFromLatLonInKm } from './methods/getDistanceFromLatLonInKm '
import { Grid, Row, Col } from 'react-flexbox-grid'
import { RunnersCount, CategoryOfRun } from './RunsSelectField'
import Container from './UI/Container'
import AddRunSnackbar from './CreateRunSnackbar'
import style, { styleColors } from '../style'
class Map extends Component {
    state = {
        runName: '',
        runData: '',
        category: 'city',
        markers: [],
        distance: '',
        runners: 2,
        busyDuringAdding: false
    }
    placeMarker = ({ lat, lng }) => {
        const markerData = { lat, lng, key: Date.now() }
        this.setState({
            markers: this.state.markers.concat(markerData),
            distance: getDistanceFromLatLonInKm(this.state.markers.concat(markerData))
        })
    }
    runNameChangeHandler = (e, value) => this.setState({ runName: value && value.replace(value[0], value[0].toUpperCase()) })
    newRunDataPickerHandler = (e, value) => this.setState({ runData: moment(value).format('DD-MM-YYYY') })
    runnersCountChangeHandler = (e, idx, value) => this.setState({ runners: value })
    runCategoryChangeHandler = (e, idx, value) => this.setState({ category: value })
    viewDistance = () => this.state.markers.length < 2 ? 'Add two or more markers. (Just clic on the map.)' : `Distance: ${this.state.distance.toFixed(3)} km`
    saveRun = () => {
        this.setState({
            busyDuringAdding: true
        })
        fetch('https://runday-app.firebaseio.com/runs.json',
            {
                method: 'POST',
                body: JSON.stringify(this.state)
            }
        )
            .then(r => r.json())
            .then((data) => {
                this.setState({
                    runName: '',
                    runData: '',
                    category: 'city',
                    markers: [],
                    distance: '',
                    runners: 2,
                })

                setTimeout(() => {
                    this.setState({
                        busyDuringAdding: false

                    })
                }, 333)
            }
            )
    }
    render() {
        return (
            <Container>
                <div>
                    <Grid fluid>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9}>
                                <div style={{ height: '70vh', width: '100%' /*Important! Always set the container height explicitl*/ }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc' }}
                                        defaultCenter={{ lat: 51.246452, lng: 22.568445 }}
                                        defaultZoom={15}
                                        onClick={this.placeMarker}
                                    >
                                        {this.state.markers.map((marker, i) => <Marker text={i + 1} lat={marker.lat} lng={marker.lng} key={i} />)}
                                    </GoogleMapReact>
                                </div>
                            </Col>
                            {
                                !this.state.busyDuringAdding ? <Col xs={12} sm={12} md={3} lg={3}>
                                    <div style={style.containerCreteRun}>
                                        <h2> Create new run </h2>
                                        <h4>{this.viewDistance()} </h4>
                                        <TextField
                                            floatingLabelText={'Run name'}
                                            value={this.state.runName}
                                            onChange={this.runNameChangeHandler}
                                            fullWidth={true}
                                            floatingLabelFocusStyle={{ color: styleColors.secondary }}
                                            underlineFocusStyle={{ borderColor: styleColors.secondary }}
                                        />
                                    </div>
                                    <CategoryOfRun
                                        category={this.state.category}
                                        onSelectChange={this.runCategoryChangeHandler}
                                    />
                                    <DatePicker
                                        floatingLabelText="Set date"
                                        //value={this.state.runData}
                                        onChange={this.newRunDataPickerHandler}
                                        autoOk={true}
                                        formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                                        fullWidth={true}
                                    />
                                    <RunnersCount
                                        runners={this.state.runners}
                                        onSelectChange={this.runnersCountChangeHandler}
                                    />
                                    <AddRunSnackbar
                                        saveRun={this.saveRun}
                                        checkToAccept={(this.state.markers.length > 1 && this.state.runName && this.state.runData)}
                                    />
                                </Col>
                                    : null}
                        </Row>
                    </Grid>
                </div>
            </Container>
        )
    }
}
export default Map