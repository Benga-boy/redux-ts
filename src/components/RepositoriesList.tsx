import { Fragment, useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypeSelector } from "../hooks/useTypeSelectors"


// interface RepositoriesState {
//   data: string[]
//   loading: string
//   error: string | null
// }

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  // ! All state properties live here
  const {data, loading, error} = useTypeSelector((state) => state.repositories)

  // ! Import use dispatch to call actions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
    setTerm('')
  }


  console.log('data: ', data, 'loading: ', loading, 'error: ', error)




  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}  type="text" name="search" />
        <button>Search</button>
      </form>
      {
        loading === 'searched' ? (
          <Fragment>
            <ul>
              {
                data.map((item: any) => <li key={item}>{item}</li>)
              }
            </ul>
          </Fragment>
        ) : <p>Please type in the package you wish to search above</p>
      }
    </div>
  )
}

export default RepositoriesList
