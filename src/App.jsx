import { useState } from "react"
import { useEffect } from "react"


function App() {

 const [counter,setCounter]=useState(0)
 useEffect(()=>{
  alert(counter)
 },[counter])
       
 return <div>
  <button onClick={()=>{
    setCounter(counter++);
  }}>Increase count

  </button>
 </div>
}
export default App;