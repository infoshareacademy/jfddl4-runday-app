import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from './UI/Container';
import SingleViewMap from './SingleViewMap';
import { RaisedButton } from 'material-ui';

import LocationCity from 'material-ui/svg-icons/social/location-city'
import LocalFlorist from 'material-ui/svg-icons/maps/local-florist'

const CardExampleExpandable = ({run}) => (
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
            markers = {run.markers}
          
            />
            </Container>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>Run date: {run.runData} </div>
            <div>Category: {run.category} </div>
            <div>Max runners: {run.runners} </div>
            <RaisedButton 
             onClick={()=>alert('This feature is not yet available.')}
             label="JOIN"
             primary={true}
             fullWidth={true}
            />
            
          </Col>
        </Row>
      </Grid>
    </CardText>
  </Card>
)

export default CardExampleExpandable;