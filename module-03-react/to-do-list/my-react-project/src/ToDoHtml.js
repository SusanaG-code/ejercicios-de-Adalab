const ToDoHtml = (props) => {
  const taskHtml = props.data.map((eachTask) => {
    return (
      <li>
        <input id={eachTask.id}></input>
      </li>
    );
  });
  console.log(taskHtml);

  return <ul>{taskHtml}</ul>;
};

ToDoHtml.propTypes = {};
export default ToDoHtml;

// eslint-disable-next-line no-lone-blocks
{
  /* <li className="todo stack-small">
<div className="c-cb">
  <input
    id={eachTask.id}
    type="checkbox"
    defaultChecked={props.completed}
  />

  <label className="todo-label" htmlFor={props.id}>
    {props.data.name}
  </label>
</div>
<div className="btn-group">
  <button type="button" className="btn">
    Edit <span className="visually-hidden">Eat</span>
  </button>
  <button type="button" className="btn btn__danger">
    Delete <span className="visually-hidden">Eat</span>
  </button>
</div>
</li> */
}
