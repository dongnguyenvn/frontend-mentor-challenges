import {
  findLast,
  isOperator,
  findLastOperator,
  calculate,
  format,
} from '../libs/calculator'
import { useReducer, Reducer, createContext, FC,Dispatch } from 'react'

export enum CalculatorActionKind {
  RESET,
  PUSH,
  REMOVE,
  OPERATE,
  ENTER,
}

type Action = {
  type: CalculatorActionKind
  value?: any
}

type InitialStateType = string[]


const initialState = ['0']

const CalculatorContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

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

const CalculatorStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export {CalculatorStateProvider,CalculatorContext}
