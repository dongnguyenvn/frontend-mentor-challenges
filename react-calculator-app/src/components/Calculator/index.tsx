const Screen = () => <div />

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
    <form>
      <Screen />
      <Keypad />
    </form>
  )
}

export { Calculator }
