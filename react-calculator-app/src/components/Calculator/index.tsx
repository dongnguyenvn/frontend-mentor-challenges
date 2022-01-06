import clsx from 'clsx'
import { FC } from 'react'

const Screen: FC = ({ children }) => (
  <div
    className={clsx(
      'p-6 pb-4 text-3xl text-right rounded-lg font-bold',
      'blue:bg-blue-800',
      'cyan:bg-gray-400',
      'violet:bg-violet-800',
    )}
  >
    <output>{children}</output>
  </div>
)

const Number: FC = ({ children }) => (
  <button
    type="button"
    className={clsx(
      'font-bold rounded shadow-normal',
      'blue:bg-orange-500 blue:text-blue-600 blue:ring-orange-600',
      'cyan:bg-yellow-500 cyan:ring-yellow-600',
      'violet:bg-violet-700 violet:ring-violet-600',
    )}
  >
    {children}
  </button>
)
const Del: FC = ({ children }) => (
  <button
    type="button"
    className={clsx(
      'font-bold rounded shadow-normal text-sm',
      'blue:bg-blue-300 blue:text-white blue:ring-blue-400',
      'cyan:text-white cyan:bg-cyan-600 cyan:ring-cyan-700',
      'violet:text-white violet:bg-magenta-600 violet:ring-magenta-500',
    )}
  >
    {children}
  </button>
)
const Reset: FC = ({ children }) => (
  <button
    type="button"
    className={clsx(
      'font-bold rounded shadow-normal text-sm col-span-2',
      'blue:bg-blue-300 blue:text-white blue:ring-blue-400',
      'cyan:text-white cyan:bg-cyan-600 cyan:ring-cyan-700',
      'violet:text-white violet:bg-magenta-600 violet:ring-magenta-500',
    )}
  >
    {children}
  </button>
)
const Equal: FC = ({ children }) => (
  <button
    type="button"
    className={clsx(
      'font-bold rounded shadow-normal text-xl col-span-2',
      'blue:bg-red-500 blue:text-white blue:ring-red-600',
      'cyan:bg-orange-700 cyan:ring-orange-800',
      'violet:bg-cyan-500 violet:ring-cyan-400 violet:text-blue-900',
    )}
  >
    {children}
  </button>
)

const Toggle = () => <div />

const Keypad = () => (
  <div
    className={clsx(
      'p-6 rounded-lg grid grid-cols-4 gap-3 min-h-[21rem]',
      'blue:bg-blue-700',
      'cyan:bg-red-700',
      'violet:bg-violet-800',
    )}
  >
    <Number>7</Number>
    <Number>8</Number>
    <Number>9</Number>
    <Del>DEL</Del>

    <Number>4</Number>
    <Number>5</Number>
    <Number>6</Number>
    <Number>+</Number>

    <Number>1</Number>
    <Number>2</Number>
    <Number>3</Number>
    <Number>-</Number>

    <Number>.</Number>
    <Number>0</Number>
    <Number>/</Number>
    <Number>*</Number>

    <Reset>RESET</Reset>
    <Equal>=</Equal>
  </div>
)

const Calculator = () => {
  return (
    <>
      <Screen>0</Screen>
      <form>
        <Keypad />
      </form>
    </>
  )
}

export { Calculator }
