import clsx from 'clsx'
import { FC } from 'react'
import { useCalculator } from '../../hooks/useCalculator'
import { Number, Del, Equal, Reset, Operator } from './Button'

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

const Toggle = () => <div />

const Keypad: FC = () => {
  return (
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
      <Operator>+</Operator>

      <Number>1</Number>
      <Number>2</Number>
      <Number>3</Number>
      <Operator>-</Operator>

      <Number>.</Number>
      <Number>0</Number>
      <Operator>/</Operator>
      <Operator>X</Operator>

      <Reset>RESET</Reset>
      <Equal>=</Equal>
    </div>
  )
}

const Calculator = () => {
  const { output } = useCalculator()
  return (
    <>
      <Screen>{output}</Screen>
      <Keypad />
    </>
  )
}

export { Calculator }
