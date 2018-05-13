import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
    padding: '10px',

}

const Container = (props) =>  <Paper  style={style}zDepth={1}>{props.children}</Paper>

export default Container