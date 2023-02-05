import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    
    <div className="App">
      <h1 className="title">Jan-Yaeger Dhillon</h1>
      <div>
        <a href="https://github.com/jansdhillon" className="github">GitHub</a>
        <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" className="linkedin">LinkedIn</a>
      </div>
      <div className="card">
        <h2>About Me</h2>
        <p className="center">Hey, I'm Jan. Welcome to my personal page! I'll be updating this regularily as my web develoopment skills advance.</p>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </div>
  )
}

export default App
