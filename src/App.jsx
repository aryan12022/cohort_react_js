import { useState, useEffect, useMemo } from "react";

function App() {
  const [counter,setCounter]= useState(0)
  const [inpu, setInput] = useState(1);
  

let count=useMemo(()=>{
  console.log("memo");
  let finalcount=0;
  for(let i=1;i<=inpu;i++){
    finalcount=finalcount+i;
  }
 return finalcount;
  
},[inpu])
 
  // useEffect(() => {
  //   setSum((inpu * (inpu + 1)) / 2);
  // }, [inpu]);
  
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInput(parseInt(e.target.value) || 1);
        }}
        placeholder="Find sum from 1 to n"
      />
      <br />
      Sum from 1 to {inpu} is {count};
      <br />
      <button
      onClick={()=>{
        setCounter(counter+1); 
      }
      }>counter {counter}</button>
    </div>
  );
}

export default App;
 