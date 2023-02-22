import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import ToDo from "./Components/ToDO/ToDo";


function App() {
  const [todos, setTodo] = useState([]);
  return (
    <div className="App">
        <Form setTodos={setTodo} />
        <ToDo todos={todos} setTodo={setTodo} />
      </div>
  );
}

export default App;
