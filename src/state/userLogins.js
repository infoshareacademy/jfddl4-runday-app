import { database } from "../firebase"
import { mapObjectToArray } from '../components/methods/mapObjectToArray'
import moment from 'moment'

const SET = 'userLogins/SET'

export const set = (logins) => ({
  type: SET,
  logins
})

export const initLoginSync = () => (dispatch, getState) => {
  database.ref('users').on(
    'value',
    snapshot => {
      const users = mapObjectToArray(snapshot.val())
      let logsArray = {}
      users.forEach(user => {
        Object.values(Object.values(user)[0]).forEach(
          log => {
            let key = moment(log.timestamp).format('YYYY-MM-DD')
            if (logsArray.hasOwnProperty(key)) {
              logsArray[key]++
            } else {
              logsArray[key] = 1
            }
          }
        )
      })
      dispatch(set(logsArray))
    })
}

const initialState = {
  usersLogins: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        usersLogins: action.logins
      }
    default:
      return state
  }
}