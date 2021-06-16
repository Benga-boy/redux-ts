import { ActionType } from "../action-types"
import {Action} from '../actions'

// ! State interface
interface RepositoriesState {
  data: string[]
  loading: string
  error: string | null
}



const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {

  switch(action.type) {
    case ActionType.SEARCH_REPOSITIRIES:
      return {...state, loading: 'searching', error: null, data: []}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {...state, loading: 'searched', error: null, data: 
    action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {...state, loading: 'none', error: action.payload, data: []}
    default:
      return state
  }
}

export default reducer