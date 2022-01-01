import './App.css'
import { Calculator, ThemeToggle } from './components'

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <main>
        <header>
          <h1 className='text-3xl font-bold'>Calc</h1>
          <ThemeToggle />
        </header>
        <Calculator />
      </main>
    </div>
  )
}

export default App
