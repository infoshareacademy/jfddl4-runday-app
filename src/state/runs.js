import { database } from "../firebase"
import { mapObjectToArray } from '../components/Methods/MapObjectToArray'

const SET = 'runs/SET'

const set = (runs) => ({
  type: SET,
  runs
})

export const initRunsSync = () => (dispatch, getState) => {
  database.ref('/runs').on(
    'value',
    (snapshot) => dispatch(
      set(
        mapObjectToArray(snapshot.val())
      )
    )
  )
}

const initialState = {
  runList: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        runList: action.runs
      }
    default:
      return state
  }
}