
import { useEffect } from 'react'
import './App.css'
import Stopwatch from './component/stopwatch'

function App() {
  useEffect(()=> {
    document.title = 'ReactApp | Stopwatch App'
  }, []);

  return (
    <>
      <h1>Welcome to the App version 1.3</h1>
      <Stopwatch />
    </>
  )
}

export default App
