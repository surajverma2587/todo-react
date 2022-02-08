import "./TodoCard.css";

export const TodoCard = (props) => {
  return (
    <div className="card todo-card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Due Date: {props.dueDate}
        </h6>
        <p className="card-text">{props.content}</p>
        <button onClick={props.onComplete} className="btn btn-success">
          Complete
        </button>
        <button onClick={props.onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
