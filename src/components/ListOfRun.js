import React from 'react'
import LocationCity from 'material-ui/svg-icons/social/location-city'
import LocalFlorist from 'material-ui/svg-icons/maps/local-florist'
import SingleRunView from './SigleRunView'
import { mapObjectToArray } from './Methods/MapObjectToArray'
import ListResearch from './ListResearch';
class ListOfResults extends React.Component {
    state = {
        imBusy: true,
        imWithErrors: false,
        runList: [],
        distance: 25
    }

    componentDidMount() {
        fetch('https://runday-app.firebaseio.com/runs.json')
            .then(r => r.json())
            .then((run) => {
                this.setState({
                    runList: mapObjectToArray(run),
                    imBusy: false
                })
                console.log('test', this.state.runList)
            })
    }

    
    handleDistanceChangeChandler = (e, value) => this.setState({ distance: value }) 

    render() {
        console.log(this.state.runList)
        if (this.state.imBusy) {
            return (<span>Loading .... </span>)
        }
        
        return (
            <div>
                <ListResearch
                    handleDistanceChangeChandler={this.handleDistanceChangeChandler}
                   
                />
                <div>
                    {this.state.runList
                    .filter(x=>x.distance<this.state.distance)
                    .map(run =>
                        <SingleRunView
                            title={run.runName}
                            avatar={run.category === 'city' ? <LocationCity /> : <LocalFlorist />}
                            distance={`${run.distance.toFixed(3)} km`}
                            runDate={run.runData}
                            category={run.category}
                            runners={run.runners}
                            markers={run.markers}
                            key={run.key}
                        />)}
                </div>
            </div>
        )
    }
}

export default ListOfResults