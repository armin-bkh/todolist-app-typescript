import { todoState } from "../../App";
import { TodoItem } from "../TodoItem/TodoItem";

interface todoListProps {
    onDelete: (id: number) => void,
    todos: todoState,
}

export const TodoList = ({ todos, onDelete }: todoListProps) => {
    return (
        <div className="mt-5">
            <ul>
            {
                todos.map((todo) => <TodoItem key={todo.id} checked={todo.checked} value={todo.value} onDelete={() => onDelete(todo.id)} />)
            }
            </ul>
        </div>
    )
};