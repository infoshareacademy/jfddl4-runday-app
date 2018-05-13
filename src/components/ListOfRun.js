import React from 'react'
import LocationCity from 'material-ui/svg-icons/social/location-city'
import LocalFlorist from 'material-ui/svg-icons/maps/local-florist'
import SingleRunView from './SigleRunView'
class ListOfResults extends React.Component {
    state = {
        imBusy: true,
        imWithErrors: false,
        runList: []
    }
    mapObjectToArray = (obj) => (
        Object.entries(obj || {})
            .map(([key, value]) => (
                typeof value === 'object' ?
                    { ...value, key }
                    :
                    { key, value }
            ))
    )
    componentDidMount() {
        fetch('https://runday-app.firebaseio.com/runs.json')
            .then(r => r.json())
            .then((run) => {
                this.setState({
                    runList: this.mapObjectToArray(run),
                    imBusy: false
                })
                console.log('test', this.state.runList)
            })
    }
    render() {
        if (this.state.imBusy) {
            return (<span>Loading .... </span>)
        }    
        return (
            <div>
                <h2>ListOfResults</h2>
                <div>
                    {this.state.runList.map(run =>
                        <SingleRunView
                            title={run.runName}
                            avatar={run.category === 'city' ? <LocationCity /> : <LocalFlorist />}
                            distance={`${run.distance.toFixed(3)} km`}
                            runDate={run.runData}
                            category={run.category}
                            runners={run.runners}
                            markers={run.markers}
                        />)}
                </div>
            </div>
        )
    }
}

export default ListOfResults