import { useMemo, useContext } from 'react'
import { CalculatorActionKind, CalculatorContext } from '../context/CalculatorContext'
import {
  findLast,
  findLastOperator,
  format,
  isOperator,
} from '../libs/calculator'

const useCalculator = () => {
  const { state, dispatch } = useContext(CalculatorContext)
  const actions = useMemo(
    () => ({
      reset: () => () => dispatch({ type: CalculatorActionKind.RESET }),
      push: (value: string) => () =>
        dispatch({ type: CalculatorActionKind.PUSH, value }),
      remove: () => () => dispatch({ type: CalculatorActionKind.REMOVE }),
      operate: (value: string) => () =>
        dispatch({ type: CalculatorActionKind.OPERATE, value }),
      enter: () => () => dispatch({ type: CalculatorActionKind.ENTER }),
    }),
    [dispatch],
  )

  //  compute
  const operator = findLastOperator(state)
  const last = findLast(state)
  const output = format(isOperator(last) ? state[state.length - 2] : last)
  return { actions, operator, output }
}

export { useCalculator }
