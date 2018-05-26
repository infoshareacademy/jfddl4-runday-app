import React from 'react'
import Pagination from 'material-ui-pagination'

import SingleRunView from './SigleRunView'
import ListResearch from './ListResearch'

import { connect } from 'react-redux'

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

    handleRunNameChangeChandler = (e, value) => this.setState({ runName: value });
    handleDistanceChangeChandler = (e, value) => this.setState({ distance: value })
    handleCategoryChangeChandler = (e, idx, value) => this.setState({ category: value })

    render() {
        const listOfRuns = this.props.runList && this.props.runList
            .filter(nam => nam.runName.toLowerCase().indexOf(this.state.runName.toLowerCase()) !== -1)
            .filter(dist => dist.distance < this.state.distance)
            .filter(cat => this.state.category === '' ? true : cat.category === this.state.category)

        const numberOfRuns = listOfRuns && listOfRuns.length

        return this.props.runList === null ?
            <span>Loading .... </span>
            :
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
                                <SingleRunView                                    runDate={run.runData}
                                    run={run}
                                    key={run.key}
                                />)
                    }
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Pagination
                        total={Math.ceil(numberOfRuns / ITEMS_PER_PAGE)}
                        current={this.state.currentPage + 1}
                        display={10}
                        onChange={newPage => this.setState({ currentPage: newPage - 1 })}
                    />
                </div>
            </div>
    }
}

export default connect(
    state => ({
        runList: state.runs.runList
    })
)(ListOfResults)