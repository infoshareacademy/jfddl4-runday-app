import React from 'react'
import Paper from 'material-ui/Paper'
import style from '../../style'

const Container = (props) => <Paper style={style.container.standard} zDepth={1}>{props.children}</Paper>

export default Container