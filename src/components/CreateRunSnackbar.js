import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import style, { styleColors } from '../style'

export default class AddRunSnackbar extends React.Component {
    state = {
        open: false
    }
    handleClick = () => {
        if (!this.props.checkToAccept) {
            alert('Add run name, minimum two markers and set date!')
            return
        }
        this.props.saveRun()
        this.setState({
            open: true
        })
    }
    handleRequestClose = () => this.setState({ open: false })

    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleClick}
                    label="CREATE RUN"
                    style={{ marginBottom: '10px' }}
                    fullWidth={true}
                    backgroundColor={styleColors.danger}
                    labelColor={styleColors.standard}
                    labelStyle={style.labelStyle}
                />
                <Snackbar
                    open={this.state.open}
                    message="Run was created and added to list"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}
