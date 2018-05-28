export const styleColors = {
    primary: '#3cba54', //green
    secondary: '#4885ed', //blue
    danger: '#db3236', //red
    think: '#f4c20d', //yellow
    standard: '#FFF'
}

export default {

    appBar: {
        background: styleColors.primary
    },
    container: {
        standard: {
            padding: '10px',
            background: '#E0E0E0'
        },
    },
    containerLogs: {
        maxWidth: '330px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    containerLoginForms: {
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    containerCreteRun: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    containerChart: {
        textAlign: 'center',
        borderRadius: '10px',
        border: 'solid 1px #3cba54',
        margin: '10px',
        paddingLeft: '10px',
    },
    containerSingleRun: {
        marginTop: '10px'
    },
    labelStyle: {
        fontWeight: '900'
    },
    loginButton: styleColors.primary,
    loginButtonFill: {
        marginTop: '10px',
    },
    loginStyle: { background: styleColors.primary },
    registerStyle: { background: styleColors.secondary },
    textFieldMargin: { marginLeft: '10px' },
    textFieldAlign: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        border: 'solid 1px #3cba54',
        marginTop: '10px',
        paddingLeft: '10px',
    },
    runsView: {
        borderRadius: '10px',
        border: 'solid 1px #3cba54',
        paddingLeft: '10px',
        marginBottom: '10px'
    }


}