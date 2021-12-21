import { useState } from "react";
import { todoState } from "../../App";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoItem } from "../TodoItem/TodoItem";
import  emptyImage  from '../../Assets/SVG/No data-cuate.svg';


interface todoListProps {
  onCheck: (id: number) => void;
  onEdit: (value: string, id: number) => void;
  onDelete: (id: number) => void;
  todos: todoState;
}

export interface editTodoState {
  value: string;
  checked: boolean;
  id: number;
}

export const TodoList = ({
  onCheck,
  todos,
  onDelete,
  onEdit,
}: todoListProps) => {
  const [editTodo, setEditTodo] = useState<editTodoState | null>(null);

  const setEditHandler = (todo: editTodoState) => {
    setEditTodo(todo);
  };

  const submitEditHandler = (value: string) => {
    setEditTodo(null);
    if (editTodo && value) onEdit(value, editTodo?.id);
  };

  return (
    <section style={{ height: "73vh" }} className="mt-5 overflow-y-auto pr-2">
      {
        todos.length ? 
      <ul>
        {todos.map((todo) =>
          editTodo?.id === todo.id ? (
            <TodoForm key={todo.id} onAdd={submitEditHandler} todo={editTodo} />
          ) : (
            <TodoItem
              key={todo.id}
              checked={todo.checked}
              value={todo.value}
              onEdit={() => setEditHandler(todo)}
              onDelete={() => onDelete(todo.id)}
              onCheck={() => onCheck(todo.id)}
            />
          )
        )}
      </ul> : 
      <EmptyMessage />
      }
    </section>
  );
};


const EmptyMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">todo list empty here!</h1>
      <img className={`max-w-md drop-shadow-lg`} src={emptyImage} alt="empty image" />
    </div>
  )
}