import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { counterReducer } from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
