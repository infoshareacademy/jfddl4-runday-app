import React from 'react'
import Paper from 'material-ui/Paper'

/*const style = {
    background: '#F1F8E9'
}*/

const Container = (props) =>  <Paper  zDepth={1}>{props.children}</Paper>

export default Container