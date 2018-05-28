import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from './UI/Container';
import SingleViewMap from './SingleViewMap';
import { RaisedButton } from 'material-ui';

import LocationCity from 'material-ui/svg-icons/social/location-city'
import LocalFlorist from 'material-ui/svg-icons/maps/local-florist'
import { mapObjectToArray } from './methods/mapObjectToArray'
import { connect } from 'react-redux';
import style, { styleColors } from '../style'
const CardExampleExpandable = ({ run, onAdRunner, user }) => (

  <Card >
    <CardHeader
      title={run.runName}
      subtitle={`${run.distance.toFixed(3)} km`}
      avatar={run.category === 'city' ? <LocationCity /> : <LocalFlorist />}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9}>
            <Container>
              <SingleViewMap
                markers={run.markers}

              />
            </Container>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>Run date: {run.runData} </div>
            <div>Category: {run.category} </div>
            <div>Max runners: {run.runners} </div>

            <RaisedButton
              onClick={onAdRunner}
              fullWidth={true}
              backgroundColor={styleColors.danger}
              labelColor={styleColors.standard}
              labelStyle={style.labelStyle}
              label={run.runnersData ?
                mapObjectToArray(run.runnersData).length < run.runners
                  ?
                  "JOIN"
                  :
                  'FULL LIST'
                : 'JOIN'}
              disabled={
                run.runnersData ?
                  mapObjectToArray(run.runnersData)
                    .map(runner => runner.value)
                    .includes(user.email) || mapObjectToArray(run.runnersData).length < run.runners ?
                    true
                    :
                    false
                  :
                  false
              }
            />
            <h4> Activ runners: </h4>
            <ul>
              {run.runnersData ?
                mapObjectToArray(run.runnersData)
                  .map((runner, index) => <li key={index}>{runner.value}</li>) : ''}
            </ul>
          </Col>
        </Row>
      </Grid>
    </CardText>
  </Card>
)

const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(
  mapStateToProps
)(CardExampleExpandable);