import React, { useState } from "react";
import { editTodoState } from "../TodoList/TodoList";

interface todoFormProps {
  todo?: editTodoState;
  onAdd: (todo: string) => void;
}

export const TodoForm = ({ todo, onAdd }: todoFormProps) => {
  const [todoValue, setTodoValue] = useState<string>(todo?.value || "");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoValue) onAdd(todoValue);
    setTodoValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full mb-4 flex items-center shadow-lg shadow-cyan-600/30 rounded-md"
    >
      <input
        autoFocus
        placeholder="your todo"
        className="flex-1 py-2 px-4 rounded-l-md bg-cyan-700 focus:outline-none placeholder:text-cyan-900"
        type="text"
        value={todoValue}
        onChange={changeHandler}
      />
      <button className="bg-black bg-opacity-40 backdrop-blur-lg rounded-r-md py-2 px-4">
        {todo?.value ? "Edit" : "Add"}
      </button>
    </form>
  );
};
