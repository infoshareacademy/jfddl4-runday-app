import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from './UI/Container';
import SingleViewMap from './SingleViewMap';
import { RaisedButton } from 'material-ui';

const CardExampleExpandable = (props) => (
  <Card >
    <CardHeader
      title={props.title}
      subtitle={props.distance}
      avatar={props.avatar}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9}>
            <Container>
            <SingleViewMap 
            markers = {props.markers}
          
            />
            </Container>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>Run date: {props.runDate} </div>
            <div>Category: {props.category} </div>
            <div>Max runners: {props.runners} </div>
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