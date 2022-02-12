import { TodoCard } from "../TodoCard";

export const Todos = ({ todos, onDelete }) => {
  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </section>
  );
};
