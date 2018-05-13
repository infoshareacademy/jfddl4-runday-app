import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Map from './CreateNewRun'
import Container from './UI/Container';

const CardExampleExpandable = (props) => (
  <Card>
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
            <div>Map markers:{props.markers}</div>
            </Container>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>Run date: {props.runDate} </div>
            <div>Category: {props.category} </div>
            <div>Max runners: {props.runners} </div>
            
            

          </Col>
        </Row>
      </Grid>
    </CardText>
  </Card>
)

export default CardExampleExpandable;