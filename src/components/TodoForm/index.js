import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const TodoForm = ({ onSubmit }) => {
  return (
    <section className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add some details"
            id="content"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <DatePicker id="dueDate" selected={Date.now()} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
