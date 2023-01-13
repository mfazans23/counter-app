import { DEC, INC, RESET } from '../constants/counterConstants'

export const decrement = (value) => (dispatch, getState) => {
  dispatch({
    type: DEC,
    value: value,
  })

  localStorage.setItem('count', getState().counter.count)
}

export const increment = (value) => (dispatch, getState) => {
  dispatch({
    type: INC,
    value: value,
  })

  localStorage.setItem('count', getState().counter.count)
}

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
  })

  localStorage.setItem('count', 0)
}
