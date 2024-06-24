import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
	name : 'anecdotes',
	initialState,
	reducers:{
		newNoti(state,action){
			const content = action.payload
			return content
		},
		removeNoti(state,action){
			return ''
		}
	}
})

export const setNotification = (text,time) => {
	return dispatch =>{
		dispatch(newNoti(text))
		setTimeout(() => {
			dispatch(removeNoti())
		  }, time)
	}
}


export const { newNoti, removeNoti} = notificationSlice.actions
export default notificationSlice.reducer