import {combineReducers} from 'redux'
import repositoriesReducer from './repositoryReducer'

const reducers = combineReducers({
  repositories: repositoriesReducer
})

export default reducers


// ! Let ts know what the state looks like
export type RootState = ReturnType<typeof reducers>