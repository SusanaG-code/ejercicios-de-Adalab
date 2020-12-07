import ToDoHtml from "./ToDoHtml";
import ToDoJS from "./ToDoJs";
import ToDoReact from "./ToDoReact";
import data from "./data.json";
import Form from "./Form";

function App(props) {
  console.log(data);
  return (
    <div className="todoapp stack-large">
      <h1>Todo List on React</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <ToDoHtml data={data} />
        <ToDoJS data={data} />
        <ToDoReact data={data} />
      </ul>
    </div>
  );
}

export default App;
