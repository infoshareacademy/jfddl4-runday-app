import React from 'react'
import { PieChart, Pie, BarChart, XAxis, CartesianGrid, Bar, YAxis, Tooltip, Legend, Cell } from 'recharts'
import { mapObjectToArray } from './Methods/MapObjectToArray'

import Container from './UI/Container'
import { Grid, Row, Col } from 'react-flexbox-grid';

const dataChartTwo = [
  { Name: 'Mon.', Run: 5 },
  { Name: 'Tue.', Run: 2 },
  { Name: 'Wed.', Run: 4 },
  { Name: 'Thu.', Run: 3 },
  { Name: 'Fri.', Run: 2 },
  { Name: 'Sat.', Run: 10 },
  { Name: 'Sun.', Run: 11 },
];
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
      })
  }
  render() {
    if (this.state.imBusy) {
      return (<span>Loading .... </span>)
    }
    return (
      <div>
        <Container>
          <Grid>
            <Row center="xs">
              <Col xs={12} sm={12} md={6} lg={6}>
                <div style={{ textAlign: 'center' }}>
                  <h2>Running Category </h2>
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
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <h2 style={{ textAlign: 'center' }}>Daily Runs </h2>
                <BarChart width={600} height={400} data={dataChartTwo}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ float: 'left' }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Run" fill="#82ca9d" />
                </BarChart>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>)
  }
}
export default Dashboard
