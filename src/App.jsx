import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)

  const [after, setafter] = useState(5)

  useEffect(() => {
    (counter > 5) && setafter(after => after + 1)
  }, [counter])

  return (
    <>
    <h2>
      Count = {counter}
    </h2>
    <h3>
      ({after}) This will increase after Counter &gt; 5
    </h3>
      <button onClick={() => setcounter(counter => counter + 1)}>
        Increase the Count
      </button>
    </>
  )
}

export default App
