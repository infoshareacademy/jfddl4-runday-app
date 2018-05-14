import React from 'react'
import LocationCity from 'material-ui/svg-icons/social/location-city'
import LocalFlorist from 'material-ui/svg-icons/maps/local-florist'
import Pagination from 'material-ui-pagination'

import SingleRunView from './SigleRunView'
import { mapObjectToArray } from './Methods/MapObjectToArray'
import ListResearch from './ListResearch'

const ITEMS_PER_PAGE = 10

class ListOfResults extends React.Component {
    state = {
        imBusy: true,
        imWithErrors: false,
        runList: [],
        runName: '',
        distance: 25,
        category: '',
        currentPage: 0
    }

    componentDidMount() {
        fetch('https://runday-app.firebaseio.com/runs.json')
            .then(r => r.json())
            .then((run) => {
                this.setState({
                    runList: mapObjectToArray(run),
                    imBusy: false
                })
                //console.log('test', this.state.runList)
            })
    }

    handleRunNameChangeChandler = (e, value) => this.setState({ runName: value });
    handleDistanceChangeChandler = (e, value) => this.setState({ distance: value })
    handleCategoryChangeChandler = (e, idx, value) => this.setState({ category: value })

    render() {
        const listOfRuns = this.state.runList
            .filter(nam => nam.runName.toLowerCase().indexOf(this.state.runName.toLowerCase()) !== -1)
            .filter(dist => dist.distance < this.state.distance)
            .filter(cat => this.state.category === '' ? true : cat.category === this.state.category)

        const numberOfRuns = listOfRuns.length

        if (this.state.imBusy) {
            return (<span>Loading .... </span>)
        }
        return (
            <div>
                <ListResearch
                    handleRunNameChangeChandler={this.handleRunNameChangeChandler}
                    handleDistanceChangeChandler={this.handleDistanceChangeChandler}
                    handleCategoryChangeChandler={this.handleCategoryChangeChandler}
                    category={this.state.category}
                />
                <div>
                    {
                        listOfRuns
                            .filter((el, i) => (
                                i >= ITEMS_PER_PAGE * this.state.currentPage
                                &&
                                i < ITEMS_PER_PAGE * (this.state.currentPage + 1)
                            ))
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
                                />)
                    }
                </div>
                        <div style ={{textAlign: 'center'}}>
                <Pagination
                    total={Math.ceil(numberOfRuns / ITEMS_PER_PAGE)}
                    current={this.state.currentPage + 1}
                    display={10}
                    onChange={newPage => this.setState({ currentPage: newPage - 1 })}
                />
                </div>
            </div>
        )
    }
}

export default ListOfResults