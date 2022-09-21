import logo from './logo.svg';
import './App.css';
import react, { useEffect, useRef, useState } from "react"
import axios from "axios"

function App() {

  

  const fetchdata=()=>{
  axios.get("")
  }

  useEffect(()=>{
    fetchdata()
  },[])


  const [counter,setCounter]=useState(0)
  const ref=useRef(null)
  const [text,setText]=useState("hello")

  const handleFocus=()=>{
     ref.current.focus()
  }

  return (
    <div className="App">
    <h1>Counter application</h1>
    <h3>the count {counter}</h3>
    <button  className='increment_count' onClick={(e)=>setCounter((prev)=>prev+1)} >add</button>
    <button className='decrement_count' onClick={(e)=>setCounter((prev)=>prev-1)} >Reduce</button>
     <input className='input_focus' ref={ref} value={text} onClick={handleFocus} />
    </div>
  );
}

export default App;
