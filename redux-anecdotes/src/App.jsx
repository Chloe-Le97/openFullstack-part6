import { useEffect } from 'react'
import anecdoteService from './service/anecdotes'
import { initializeAnecdote } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(initializeAnecdote())
	},[])
	
  return (
    <div>
		<Notification/>
		<h2>Anecdotes</h2>
		<Filter />
		<AnecdoteList/>
		<AnecdoteForm />
    </div>
  )
}

export default App