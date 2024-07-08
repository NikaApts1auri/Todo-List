import { useState } from "react";

export default function TodoList({ todos, setTodos }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleCheck = (id, event) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isDone: event.target.checked } : item
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };
  //here was a problem
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const handleSave = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, text: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  };
  //till here
  return (
    <div>
      <ul className="w-full bg-[#25273d] mt-[30px] py-[15px]">
        {todos.map((item) => (
          <li key={item.id} className="py-[15px] px-[20px] ">
            <input
              className="mr-2 w-4 h-4 accent-[#550bbc]"
              type="checkbox"
              checked={item.isDone}
              onChange={(event) => handleCheck(item.id, event)}
            />
            {item.id === editId ? (
              <input
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
              />
            ) : (
              <span
                className={`${
                  item.isDone ? "line-through text-#4d5067" : "text-[#c8cbe7]"
                } `}
              >
                {item.text}
              </span>
            )}

            <button
              onClick={() => handleDelete(item.id)}
              className="float-right text-[red]"
            >
              Delete
            </button>
            <button
              className="float-right text-[#c8cbe7] mr-2"
              onClick={() => {
                item.id === editId ? handleSave(item.id) : handleEdit(item);
              }}
            >
              {item.id === editId ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
