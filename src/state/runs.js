import { database } from "../firebase"
import { mapObjectToArray } from '../components/methods/mapObjectToArray'

const SET = 'runs/SET'

export const set = (runs) => ({
  type: SET,
  runs
})

const initialState = {
  runList: [],
  phrase:'',
  sortedRunsList:[]
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