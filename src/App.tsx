
import { useEffect } from 'react'
import './App.css'
import Stopwatch from './component/stopwatch'
// hey copilot, write a stopwatch app in React with TypeScript

function App() {
  useEffect(()=> {
    document.title = 'ReactApp | Stopwatch App'
  }, []);

  return (
    <>
      <h1>Welcome to the Stopwatch App</h1>
      <Stopwatch />
    </>
  )
}

export default App
