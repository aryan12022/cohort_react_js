import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  let [count,setCount]=useState(1)
  return (
    <div>
     <button onClick={function (){
      setCount(1);
     }}>1</button>
      <button onClick={function (){
      setCount(2);
     }}>2</button>
       <button onClick={function (){
      setCount(3);
     }}>3</button>
       <button onClick={function (){
      setCount(4);
     }}>4</button>
     <Todo id={count}/>
    </div>
  )
}



function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then( (response) => {
         setTodo(response.data);
      })
     
  }, [id]);
 

  return (
    <div>
      Id:{id}
      <h1>{todo.title}</h1>
      <p>{todo.completed }</p>
    </div>
  );
}

export default App;
