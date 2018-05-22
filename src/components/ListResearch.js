import React from 'react'

import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Container from './UI/Container'
import { Grid, Row, Col } from 'react-flexbox-grid';

const ListResearch = (props) => (
  <div>
    <Container>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <TextField
              onChange={props.handleRunNameChangeChandler}
              hintText={'Run name'}
              floatingLabelText={'Search run'}
              fullWidth={true}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DropDownMenu
              autoWidth={false}
              style={{ width: '100%' }}
              value={props.category}
              onChange={props.handleCategoryChangeChandler}
            >
              <MenuItem value={''} primaryText="Chose category" />
              <MenuItem value={'forest'} primaryText="Forest runs" />
              <MenuItem value={'city'} primaryText="City runs" />
              <MenuItem value={'user_id'} primaryText="My runs" />
              
            </DropDownMenu>
            <br />
          </Col>
        </Row>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <span style={{ display: 'inline-block', textAlign: 'left', width: '10VW' }}>0 km</span>
        <div style={{ display: 'inline-block', width: '70vw' }}>
          <Slider
            min={0}
            max={25}
            sliderStyle={{ marginBottom: 0 }}
            onChange={props.handleDistanceChangeChandler}
            defaultValue={25}
          />
        </div>
        <span style={{ display: 'inline-block', textAlign: 'right', width: '10vw' }}>25 km</span>
      </div>
    </Container >
  </div >
)

export default ListResearch