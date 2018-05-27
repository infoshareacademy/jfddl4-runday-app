export const styleColors = {
    green: '#3cba54',
    red: '#db3236',
    blue: '#4885ed',
    yellow: '#f4c20d',
    white: '#FFF'
}

export default {

    appBar: {
        background: styleColors.green
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
    labelStyle: {
        fontWeight: '900'
    },
    loginButton: styleColors.green,
    loginButtonFill: {
        marginTop: '10px',

    },
    loginStyle: { background: styleColors.green },
    registerStyle: { background: styleColors.blue },
    textFieldMargin: { marginLeft: '10px' },
    textFieldAlign: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        border: 'solid 1px #3cba54',
        marginTop: '10px',
        paddingLeft: '10px',
    },

}