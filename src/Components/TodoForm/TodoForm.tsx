import React, { useState } from "react";

interface todoFormProps {
    onAdd: (todo: string) => void,
}

export const TodoForm = ({ onAdd }: todoFormProps) => {
    const [todo, setTodo] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo) onAdd(todo);
    }

    return (
        <form onSubmit={submitHandler} className="w-full flex items-center shadow-lg shadow-cyan-600/30">
            <input className="flex-1 py-2 px-4 rounded-l-md bg-cyan-700 focus:outline-none" type="text" value={todo} onChange={changeHandler} />
            <button className="bg-black bg-opacity-40 backdrop-blur-lg rounded-r-md py-2 px-4 overflow-hidden">Add</button>
        </form>
    )
};