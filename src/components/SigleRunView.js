import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Map from './CreateNewRun'

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
          title="Run title"
          subtitle="Distance"
          avatar="images/ok-128.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
     <CardText expandable={true}>
      <Map />
    </CardText>
  </Card>
);

export default CardExampleExpandable;