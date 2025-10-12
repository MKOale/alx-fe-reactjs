import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
