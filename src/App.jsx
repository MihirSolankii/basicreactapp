import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNote from './AddNote'
import TypingChallenge from './TypingChallenge'

function App() {
  const [count, setCount] = useState(0)

  
  

  
  return (
   
     <>
     <div>hello workd</div>
     {/* <AddNote/> */}
     <TypingChallenge/>
     </>
  )
}

export default App
