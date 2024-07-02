import React from "react";

export default function AddTodo({ inputValue, setInputValue, setTodos }) {
  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: inputValue,
        isDone: false,
        id: Math.random(),
      },
    ]);
    setInputValue("");
  };
  const handleSave = () => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id == editId
          ? {
              ...item,
              text: editText,
            }
          : item
      ),
    ]);
    setEditId();
  };

  return (
    <div className="mt-[48px] relative ">
      <input
        className="w-full py-[23px] pl-[72px] bg-[#25273d] outline-none text-[#4d5067] text-[18px] "
        type="text"
        value={inputValue}
        placeholder="Create a new todo"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="absolute top-0 right-o py-[23px] px-[24px] bg-[#3a7bfd] font-bold text-[18px] text-white hover:opacity-35 "
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
