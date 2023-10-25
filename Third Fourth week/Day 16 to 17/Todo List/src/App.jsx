import { useState } from "react";
import Todo from "./components/todo/Todo";

function App() {
  const [isTodo1, setTodo1] = useState(true);
  const hideTodo1 = () => { setTodo1(false) };
  const [isTodo2, setTodo2] = useState(true);
  const hideTodo2 = () => { setTodo2(false) };
  const [isTodo3, setTodo3] = useState(true);
  const hideTodo3 = () => { setTodo3(false) };
  const [isTodo4, setTodo4] = useState(true);
  const hideTodo4 = () => { setTodo4(false) };
  
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center">My React App</h1>
        
        {isTodo1 ? <Todo text="React" hide = {hideTodo1}/>: null}
        {isTodo2 ? <Todo text="JS ES5" hide = {hideTodo2}/>: null}
        {isTodo3 ? <Todo text="JS ES6" hide = {hideTodo3}/>: null}
        {isTodo4 ? <Todo text="MONGO DB" hide = {hideTodo4}/>: null}
        {/* <Todo text="JS ES5" />
        <Todo text="JS ES6" />
        <Todo text="MONGO DB" /> */}
      </div>
    </>
  );
}

export default App;
