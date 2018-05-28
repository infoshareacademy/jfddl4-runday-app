import React from 'react'

import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Container from './UI/Container'
import { Grid, Row, Col } from 'react-flexbox-grid';
import style, { styleColors } from '../style';

const ListResearch = (props) => (
  <div>
    <Container>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} >
            <div style={style.textFieldAlign}>
              <h3>Search Run:</h3>
              <TextField
                style={style.textFieldMargin}
                onChange={props.handleRunNameChangeChandler}
                hintText={'Run name'}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={style.textFieldAlign}>
              <h3>Category: </h3>
              <DropDownMenu
                style={style.textFieldMargin}
                autoWidth={false}
                style={{ width: '100%' }}
                value={props.category}
                onChange={props.handleCategoryChangeChandler}
                labelStyle={{ color: 'gray' }}
                menuItemStyle={{ fontSize: '1em' }}
                selectedMenuItemStyle={{ color: styleColors.primary }}
              >
                <MenuItem value={''} primaryText="Chose category" />
                <MenuItem value={'forest'} primaryText="Forest runs" />
                <MenuItem value={'city'} primaryText="City runs" />
                <MenuItem value={'user_id'} primaryText="My runs" />

              </DropDownMenu>
            </div>
            <br />
          </Col>
        </Row>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <h4>Set distnce:</h4>
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