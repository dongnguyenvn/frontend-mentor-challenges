import clsx from 'clsx'
import { FC } from 'react'

const Screen: FC = ({ children }) => (
  <div
    className={clsx(
      'p-6 pb-4 text-3xl text-right rounded-lg font-bold',
      'blue:bg-blue-800',
      'cyan:bg-gray-400',
      'violet:bg-violet-800'
    )}
  >
    <output>{children}</output>
  </div>
)

const Button = () => <button></button>

const Toggle = () => <div />

const Keypad = () => (
  <div>
    <>7</>
    <>8</>
    <>9</>
    <>DEL</>

    <>4</>
    <>5</>
    <>6</>
    <>+</>

    <>1</>
    <>2</>
    <>3</>
    <>-</>

    <>.</>
    <>0</>
    <>/</>
    <>*</>
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
