import {
  findLast,
  isOperator,
  findLastOperator,
  calculate,
  format,
} from '../libs/calculator'
import { useReducer, useMemo, Reducer } from 'react'

const initialState = ['0']

enum CalculatorActionKind {
  RESET,
  PUSH,
  REMOVE,
  OPERATE,
  ENTER,
}

type Action = {
  type: CalculatorActionKind
  value ?: any
}

const calculatorReducer: Reducer<string[], Action> = (state = [], action) => {
  if (action.type === CalculatorActionKind.RESET) {
    return initialState
  }

  if (action.type === CalculatorActionKind.PUSH) {
    const last = findLast(state)

    if (isOperator(last)) {
      return [...state, action.value]
    }

    if (action.value === '.' && last.includes(action.value)) {
      return state
    }

    if (action.value === '.') {
      return [...state.slice(0, -1), last + action.value]
    }

    return [...state.slice(0, -1), last + action.value]
  }

  if (action.type === CalculatorActionKind.REMOVE) {
    const last = findLast(state)

    if (isOperator(last)) {
      return state.slice(0, -1)
    }

    return [...state.slice(0, -1), String(last).slice(0, -1)]
  }

  if (action.type === CalculatorActionKind.OPERATE) {
    const last = findLast(state)

    if (isOperator(last)) {
      return [...state.slice(0, -1), action.value]
    }

    if (findLastOperator(state) === action.value) {
      return [...calculate(state), action.value]
    }

    return [...state, action.value]
  }

  if (action.type === CalculatorActionKind.ENTER) {
    return calculate(state)
  }

  return state
}

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  const actions = useMemo(
    () => ({
      reset: () => () => dispatch({ type: CalculatorActionKind.RESET }),
      push: (value: string) => () => dispatch({ type: CalculatorActionKind.PUSH, value }),
      remove: () => () => dispatch({ type: CalculatorActionKind.REMOVE }),
      operate: (value: string) => () => dispatch({ type: CalculatorActionKind.OPERATE, value }),
      enter: () => () => dispatch({ type: CalculatorActionKind.ENTER }),
    }),
    [dispatch],
  )

  //  compute
  const operator = findLastOperator(state)
  const last = findLast(state)
  const output = format(isOperator(last) ? state[state.length - 2] : last)

  return { operator, output, actions }
}
