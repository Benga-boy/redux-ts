import { ActionType } from "../action-types";
import {Dispatch} from 'redux'
import axios from 'axios'
import {Action} from '../actions'


export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // const res = await axios.get()
    dispatch({
      type: ActionType.SEARCH_REPOSITIRIES
    })

    try {
      const res = await axios.get('http://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })
      const data = res.data.objects.map((object: any) => object.package.name)
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}