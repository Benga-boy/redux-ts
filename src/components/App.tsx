import { Fragment } from 'react'
import { Provider } from 'react-redux'
import { store } from '../state'
import RepositoriesList from './RepositoriesList'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>Search for a package</h1>
        <RepositoriesList />
      </Fragment>
    </Provider>
  )
}

export default App
