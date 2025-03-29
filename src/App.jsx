import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={3} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
      });
  }, [id]);

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>Status: {todo.completed ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
}

export default App;
