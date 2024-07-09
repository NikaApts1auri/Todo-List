import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <main
      style={{ backgroundSize: "100% 380px" }}
      className="min-h-screen w-[100%] 
     bg-hero-img bg-no-repeat  bg-dark "
    >
      <div className="w-[540px] mx-auto pt-[70px] ">
        <div className="flex justify-between items-center ">
          <h1 className="text-white text-[40px] font-bold">TODO</h1>
          <img src="./images/sun.svg" alt="" />
        </div>

        <AddTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}

export default App;
