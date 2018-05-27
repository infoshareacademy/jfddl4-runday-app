import React from 'react'
import { PieChart, Pie, BarChart, XAxis, CartesianGrid, Bar, YAxis, Tooltip, Legend, Cell } from 'recharts'
import moment from 'moment'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { mapObjectToArray } from './methods/mapObjectToArray'
import Container from './UI/Container'
import { database } from '../firebase'
import { styleColors } from '../style'

class Dashboard extends React.Component {
  state = {
    imBusy: true,
    imWithErrors: false,
    data: []
  }

  componentDidMount() {
    database.ref('/runs').on(
      'value',
      (snapshot) => {
        const run = snapshot.val()
        this.setState({
          data: [
            {
              value: mapObjectToArray(run)
                .map(run => run.category)
                .filter(category => category === 'city').length, name: 'City runs', color: styleColors.yellow
            },
            {
              value: mapObjectToArray(run)
                .map(run => run.category)
                .filter(category => category === 'forest').length, name: 'Forest runs', color: styleColors.red
            }],
          imBusy: false
        })
      }
    )
  }

  render() {
    if (this.state.imBusy) {
      return (<span>Loading .... </span>)
    }
    return (
      <div>
        <Container>
          <Grid>
            <Row xs="center">
              <Col xs={12} sm={12} md={12} lg={6}>
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
              <Col xs={12} sm={12} md={12} lg={6}>
                <h2 style={{ textAlign: 'center' }}>Daily Users Logs </h2>
                <BarChart width={600} height={400} data={this.props.logins}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ float: 'left' }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Users" fill="#82ca9d" />
                </BarChart>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>)
  }
}

const makeDataToChart = (logins = {}) => {
  let results = []

  for (let i = 0; i < 7; i++) {
    let key = moment().subtract(i, 'days').format('YYYY-MM-DD')
    results.push(
      { Name: key, Users: logins[key] || 0 }
    )
  }
  return results
}

export default connect(
  (state) => ({
    loginsRaw: state.userLogins.usersLogins,
    logins: makeDataToChart(
      state.userLogins.usersLogins
    )
  })
)(Dashboard)
