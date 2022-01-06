import clsx from 'clsx'
import { FC } from 'react'
import { useCalculator } from '../../hooks/useCalculator'

const Number: FC = ({ children }) => {
  const {
    actions: { push },
  } = useCalculator()
  return (
    <button
      type="button"
      className={clsx(
        'font-bold rounded shadow-normal',
        'blue:bg-orange-500 blue:text-blue-600 blue:ring-orange-600',
        'cyan:bg-yellow-500 cyan:ring-yellow-600',
        'violet:bg-violet-700 violet:ring-violet-600',
      )}
      onClick={push(children as string)}
    >
      {children}
    </button>
  )
}

const Operator: FC = ({ children }) => {
  const {
    actions: { operate },
  } = useCalculator()
  return (
    <button
      type="button"
      className={clsx(
        'font-bold rounded shadow-normal',
        'blue:bg-orange-500 blue:text-blue-600 blue:ring-orange-600',
        'cyan:bg-yellow-500 cyan:ring-yellow-600',
        'violet:bg-violet-700 violet:ring-violet-600',
      )}
      onClick={operate(children as string)}
    >
      {children}
    </button>
  )
}

const Del: FC = ({ children }) => {
  const {
    actions: { remove },
  } = useCalculator()
  return (
    <button
      type="button"
      className={clsx(
        'font-bold rounded shadow-normal text-sm',
        'blue:bg-blue-300 blue:text-white blue:ring-blue-400',
        'cyan:text-white cyan:bg-cyan-600 cyan:ring-cyan-700',
        'violet:text-white violet:bg-magenta-600 violet:ring-magenta-500',
      )}
      onClick={remove()}
    >
      {children}
    </button>
  )
}

const Reset: FC = ({ children }) => {
  const {
    actions: { reset },
  } = useCalculator()
  return (
    <button
      type="button"
      className={clsx(
        'font-bold rounded shadow-normal text-sm col-span-2',
        'blue:bg-blue-300 blue:text-white blue:ring-blue-400',
        'cyan:text-white cyan:bg-cyan-600 cyan:ring-cyan-700',
        'violet:text-white violet:bg-magenta-600 violet:ring-magenta-500',
      )}
      onClick={reset()}
    >
      {children}
    </button>
  )
}

const Equal: FC = ({ children }) => {
  const {
    actions: { enter },
  } = useCalculator()
  return (
    <button
      type="button"
      className={clsx(
        'font-bold rounded shadow-normal text-xl col-span-2',
        'blue:bg-red-500 blue:text-white blue:ring-red-600',
        'cyan:bg-orange-700 cyan:ring-orange-800',
        'violet:bg-cyan-500 violet:ring-cyan-400 violet:text-blue-900',
      )}
      onClick={enter()}
    >
      {children}
    </button>
  )
}

export { Number, Del, Equal, Reset, Operator }
