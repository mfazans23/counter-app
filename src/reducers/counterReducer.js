import { DEC, INC, RESET } from '../constants/counterConstants'

const initialState = {
  count: localStorage.getItem('count')
    ? JSON.parse(localStorage.getItem('count'))
    : 0,
}

export const counterReducer = (state = initialState, action) => {
  const { type, value } = action

  switch (type) {
    case DEC:
      return {
        ...state,
        count: state.count - value,
      }
    case INC:
      return {
        ...state,
        count: state.count + value,
      }
    case RESET:
      return {
        ...state,
        count: 0,
      }
    default:
      return state
  }
}
