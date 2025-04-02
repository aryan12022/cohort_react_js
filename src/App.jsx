import { useState, useMemo, useCallback,
   useEffect,
   useRef} from "react";



function App(){
 const [incomeTax,setIncomeTax]=useState(2000)
  
const divref =useRef();

useEffect(()=>{
  setTimeout(() => {
    console.log(divref.current);
    divref.current.innerHTML=10
  }, 5000);
 
},[])

return (
  <div>
  hi there , your income tax returns are <div ref={divref}>{incomeTax}</div>
  </div>
)
  
}
export default App 
