import firebase  from 'firebase'

const config = {
    apiKey: "AIzaSyCwo-AV63_dkCCOtdfz9cep0a1U_KdMbdw",
    authDomain: "runday-app.firebaseapp.com",
    databaseURL: "https://runday-app.firebaseio.com",
    projectId: "runday-app",
    storageBucket: "runday-app.appspot.com",
    messagingSenderId: "1001160247930"
}


firebase.initializeApp(config)
export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()


