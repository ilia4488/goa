import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true);
  const [color,setColor]=useState()
  return (
    <div style={{ backgroundColor: color}}>
      <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -1
        </button>
      <p>----------------------------------------------------</p>
      
      <button onClick={() => setIsVisible(!isVisible)}>
        Hello React
      </button>

      {isVisible && <p>Hello React</p>}
        <p>----------------------------------------------------</p>

      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>

    </div>
  )


}

export default App

// 1.useState aris reactshi chashenebuli hooki romelic saishualebas adzlevs komponentebs marton shida mdgomareoba
// 2.useState-it sheqmnili cvlads roca shevucvlit mnishvnelobas reaqti amas naxavs da tavidan daarenderebs ekranze da ubralod sheqmnili cvladis dros ara
