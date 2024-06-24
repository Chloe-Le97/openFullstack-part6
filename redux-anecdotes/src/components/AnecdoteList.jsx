import {useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import {newNoti, removeNoti, setNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {

	const filter = useSelector(state => state.filter)
	const anecdotes = useSelector(state => state.anecdotes).filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

	const dispatch = useDispatch()

	const voteAnecdote = (id) => {
		

		const anecdote = anecdotes.find(item => item.id === id)

		dispatch(vote(anecdote))

		dispatch(setNotification(`You votes '${anecdote.content}'`, 5000))

	}

	return (
		<div>
			{anecdotes.map(anecdote =>
			<div key={anecdote.id}>
				<div>
				{anecdote.content}
				</div>
				<div>
				has {anecdote.votes}
				<button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
				</div>
			</div>
      )}
		</div>
	)
}

export default AnecdoteList