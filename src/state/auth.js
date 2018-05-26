import { auth, database, googleProvider } from '../firebase'

//actions
const LOGGED_IN = 'auth/LOGGED_IN'
const LOGGED_OUT = 'auth/LOGGED_OUT'
const INTERNAL_ERROR = 'auth/INTERNAL_ERROR'
const EXTERNAL_ERROR = 'auth/EXTERNAL_ERROR'

//actions creator
export const loggedIn = (user) => ({ type: LOGGED_IN, user })
export const loggedOut = () => ({ type: LOGGED_OUT })
const handleInternalError = (error) => ({ type: INTERNAL_ERROR, error })
const handleExternalError = (error) => ({ type: EXTERNAL_ERROR, error })

//initial state
const initialState = {
    isLoggedIn: false,
    user: null,
    error: '',
    imWithError: false
}

//reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                error: '',
                imWithError: false,
            }
        case LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: '',
                imWithError: false
            }
        case INTERNAL_ERROR:
            return {
                ...state,
                isUserLoggedIn: false,
                error: action.error,
                imWithError: true
            }
        case EXTERNAL_ERROR:
            return {
                ...state,
                isUserLoggedIn: false,
                error: action.error.message,
                imWithError: true
            }
        default:
            return state
    }
}

export const logUserLogIn = (getState) => {
    const userUid = auth.currentUser.uid;
    database.ref(`/users/${userUid}/loginsLogs`)
        .push({ timestamp: Date.now() })
}

export const getAllUsers1 = () => {
    return database.ref(`/users`).once(`value`)
    
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .then(result => {
            dispatch(loggedIn(result.user))
            logUserLogIn(getState)
        })
}

export const logOut = () => (dispatch, getState) => {
    auth.signOut()
        .then(() => dispatch(loggedOut()))
}

export const initAuthUserSync = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            // if (user) {
            //     dispatch(loggedIn(user))
            //     logUserLogIn(getState)
            // } else {
            //     // dispatch(loggedOut())
            // }
        }
    )
}
export const logInByMailAndPass = (email, password) => (dispatch, getState) => {
    if (email && password) {
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(loggedIn(user));
                logUserLogIn(getState);
            })
            .catch(error => dispatch(handleExternalError(error)))
    } else if (!password) {
        dispatch(handleInternalError('Password is required'))
    } else if (!email) {
        dispatch(handleInternalError('Email is required'))
    }
}

export const createUser = (email, password, passwordRetyped) => (dispatch, getState) => {
    if (email && password && password === passwordRetyped) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => dispatch(loggedIn(user)))
            .catch(error => dispatch(handleExternalError(error)))
    } else if (!password) {
        dispatch(handleInternalError('Password is required'))
    } else if (!email) {
        dispatch(handleInternalError('Email is required'))
    } else if (password !== passwordRetyped) {
        dispatch(handleInternalError('Passwords do not match'))
    }
}


