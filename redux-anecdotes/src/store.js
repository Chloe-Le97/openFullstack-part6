import { configureStore } from '@reduxjs/toolkit'
import anecdotesReducer, {setAnecdotes} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from './service/anecdotes'


const store = configureStore({
	reducer:{
		anecdotes: anecdotesReducer,
		filter: filterReducer,
		notification: notificationReducer
	}
})


console.log(store.getState())

export default store;