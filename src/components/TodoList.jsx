import { useState } from "react";

export default function TodoList({ todos, setTodos }) {
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const handleCheck = (id, event) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: event.target.checked,
            }
          : item
      ),
    ]);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => [...prevTodos.filter((item) => item.id !== id)]);
  };

  const handleEdit = (item) => {
    setEditId(item.id), setEditText(item.text);
  };

  return (
    <div>
      <ul className="w-full bg-[#25273d] mt-[30px] py-[">
        {todos.map((item) => (
          <li key={item.id} className="py-[15px] px-[20px] ">
            <input
              className="mr-2 w-4 h-4 accent-[#550bbc]"
              type="checkbox"
              onChange={(event) => handleCheck(item.id, event)}
            />
            {item.id === editId ? (
              <input
                defaultValue={item.text}
                onChange={(event) => {
                  setEditText(event.target.value);
                }}
              />
            ) : (
              <span
                className={`${
                  item.isDone ? "line-through text-#4d5067" : "text-[#c8cbe7]"
                } `}
              >
                item.text
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
                item.id == editId ? handleSave(item) : handleEdit(item);
              }}
            >
              {item.id == editId ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
