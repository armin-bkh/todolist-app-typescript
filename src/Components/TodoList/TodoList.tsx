import { useState } from "react";
import { todoState } from "../../App";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoItem } from "../TodoItem/TodoItem";

interface todoListProps {
    onCheck: (id: number) => void,
    onEdit: (value: string, id: number) => void,
    onDelete: (id: number) => void,
    todos: todoState,
}

export interface editTodoState { 
    value: string,
    checked: boolean,
    id: number
 }

export const TodoList = ({ onCheck, todos, onDelete, onEdit }: todoListProps) => {
    const [editTodo, setEditTodo] = useState<editTodoState| null>(null);

    const setEditHandler = (todo: editTodoState) => {
        setEditTodo(todo);
    }

    const submitEditHandler = (value: string) => {
        setEditTodo(null);
        if(editTodo && value) onEdit(value, editTodo?.id);
    }

    return (
        <div className="mt-5">
            <ul>
            {
                todos.map((todo) => editTodo?.id === todo.id ? <TodoForm key={todo.id} onAdd={submitEditHandler} todo={editTodo}/> : <TodoItem key={todo.id} checked={todo.checked} value={todo.value} onEdit={()=> setEditHandler(todo)} onDelete={() => onDelete(todo.id)} onCheck={()=> onCheck(todo.id)} />)
            }
            </ul>
        </div>
    )
};