import { useState, useEffect } from "react";

function App() {

  const [inpu, setInput] = useState(1);
  const [sum, setSum] = useState(1);

  useEffect(() => {
    let c = 0;
    for (let i = 1; i <= inpu; i++) {
      c += i;
    }
    setSum(c);
  }, [inpu]);

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
      Sum from 1 to {inpu} is {sum}
      
   
    
    </div>
  );
}

export default App;
 