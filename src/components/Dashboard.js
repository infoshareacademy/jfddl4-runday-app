import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { mapObjectToArray } from './Methods/MapObjectToArray'

import Container from './UI/Container'
class Dashboard extends React.Component {
  state = {
    imBusy: true,
    imWithErrors: false,
    data: []
  }

  componentDidMount() {
    fetch('https://runday-app.firebaseio.com/runs.json')
      .then(r => r.json())
      .then((run) => {
        this.setState({
          data: [
            {
              value: mapObjectToArray(run)
                .map(run => run.category)
                .filter(category => category === 'city').length, name: 'City runs', color: '#212121'
            },
            {
              value: mapObjectToArray(run)
                .map(run => run.category)
                .filter(category => category === 'forest').length, name: 'Forest runs', color: 'green'
            }],
          imBusy: false
        })
        console.log('test', this.state.data)
      })
  }
  render() {
    if (this.state.imBusy) {
      return (<span>Loading .... </span>)
    }
    return (
      <div>
        <Container>
          <h2 style={{ textAlign: 'center' }}>Running List </h2>
          <PieChart width={500} height={500}>
            <Pie
              data={this.state.data}
              dataKey="value"
              nameKey="name"
            >
              {this.state.data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </Container>
      </div>)
  }
}
export default Dashboard
