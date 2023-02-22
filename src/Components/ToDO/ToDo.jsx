import "./ToDo.css";
import { BiTrash } from "react-icons/bi";

const ToDo = ({ todos, setTodo }) => {
  const handleColor = (event) => {
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "grey";
    }
  };

  const handleDeleteClick = (title) => {
    setTodo(todos.filter((item) => item !== title));
    console.log(todos);
  };

  return (
    <div className="Plans">
      {todos.map((item, i) => {
        return (
          <div key={i} className="qwert">
            <li id="id" className="todo_p" onClick={handleColor}>
              {item}
              <button
                className="trashbtn"
                onClick={() => handleDeleteClick(item)}
              >
                <BiTrash />
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
