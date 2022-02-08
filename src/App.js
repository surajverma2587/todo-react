import { useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

export const App = () => {
  const mockTodos = [
    {
      id: "1",
      title: "Item 1",
      content: "This is item 1",
      dueDate: Date.now(),
    },
    {
      id: "2",
      title: "Item 2",
      content: "This is item 2",
      dueDate: Date.now(),
    },
    {
      id: "3",
      title: "Item 3",
      content: "This is item 3",
      dueDate: Date.now(),
    },
    {
      id: "4",
      title: "Item 4",
      content: "This is item 4",
      dueDate: Date.now(),
    },
  ];
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const onComplete = (event) => {
    console.log("onComplete");
  };

  const onDelete = (event) => {
    console.log("onDelete");
  };

  return (
    <div>
      <Header title="My ToDo Items" todoCount={10} />
      <TodoForm onSubmit={onSubmit} />
      <Todos todos={todos} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
};
