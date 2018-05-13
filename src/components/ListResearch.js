import React from 'react'

import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Container from './UI/Container'

const ListResearch = (props) => (
  <div>
    <Container>
      <div>
        <TextField
          //onChange={props.handleNameChange}
          hintText="Wpisz nazwę"
          floatingLabelText="Wyszukaj bieg"
          fullWidth={true}
     
        />
        <div>
          <span style={{ display: 'inline-block', textAlign: 'left', width: '10VW'}}>0 km</span>
          <div style={{ display: 'inline-block', width: '70vw' }}>
            <Slider
              min={0}
              max={25}
              sliderStyle={{ marginBottom: 0 }}
              onChange={props.handleDistanceChangeChandler}
              
              defaultValue={25}
              
            />
          </div>
          <span style={{ display: 'inline-block', textAlign: 'right', width: '10vw'}}>25 km</span>
        </div>
        <div>
          <DropDownMenu
            autoWidth={false}
            style={{ width: '100%' }}
            value={props.category}
            //onChange={props.handleCategoryChange}
          >
            <MenuItem value={''} primaryText="Chose category" />
            <MenuItem value={'city'} primaryText="Forest runs" />
            <MenuItem value={'forest'} primaryText="City runs" />
          </DropDownMenu>
          <br />
        </div>
      </div>
    </Container>
  </div>
)

export default ListResearch