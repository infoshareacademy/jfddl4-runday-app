import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Map from './CreateNewRun'

const CardExampleExpandable = (props) => (
  <Card>
    <CardHeader
          title={props.title}
          subtitle={props.distance}
          avatar="images/ok-128.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
     <CardText expandable={true}>
      <span>Runners : {props.message} </span>
    </CardText>
  </Card>
);

export default CardExampleExpandable;