import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
    padding: '10px',
    background: '#E0E0E0'
}

const Container = (props) =>  <Paper  style={style}zDepth={1}>{props.children}</Paper>

export default Container