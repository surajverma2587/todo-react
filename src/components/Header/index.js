import "./Header.css";

export const Header = ({ title, todoCount }) => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead">
        {todoCount
          ? `You have a total of ${todoCount} things to do`
          : "You have no to do items"}
      </p>
    </div>
  );
};
