import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './index.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as shared } from './shared/shared.slice'
import { reducer as games } from './games/Games.slice'

const reducers = combineReducers({
	shared,
	games,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
