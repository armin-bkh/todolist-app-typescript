import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/SideBar/SideBar";
import { TodoForm } from "./Components/TodoForm/TodoForm";
import { TodoList } from "./Components/TodoList/TodoList";

export type todoState = {
  id: number;
  value: string;
  checked: boolean;
}[];

function App() {
  const [allTodos, setAllTodos] = useState<todoState | []>([]);

  useEffect(() => {
    const savedAllTodos = JSON.parse(localStorage.getItem('typeTodos') || '');
    if(savedAllTodos) setAllTodos(savedAllTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('typeTodos', JSON.stringify(allTodos));
  }, [allTodos]);

  const addTodoHandler = (todo: string) => {
    setAllTodos([
      ...allTodos,
      {
        id: new Date().getTime(),
        value: todo,
        checked: false,
      },
    ]);
  };

  const deleteTodoHandler = (id: number) => {
    setAllTodos((prevAllTodos) =>
      prevAllTodos.filter((todo) => todo.id !== id)
    );
    console.log(1);
  };

  const editTodoHandler = (value: string, id: number) => {
    const cloneAllTodos = [...allTodos];
    const index = cloneAllTodos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...cloneAllTodos[index] };
    selectedTodo.value = value;
    cloneAllTodos[index] = selectedTodo;
    setAllTodos(cloneAllTodos);
  };

  const checkTodoHandler = (id: number) => {
    const cloneAllTodos = [...allTodos];
    const index = cloneAllTodos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...cloneAllTodos[index] };
    selectedTodo.checked = !selectedTodo.checked;
    cloneAllTodos[index] = selectedTodo;
    setAllTodos(cloneAllTodos);
  };

  return (
    <div className="h-screen p-5 text-cyan-500">
      <div
        className={`h-full grid grid-cols-3 rounded-md p-2 bg-black bg-opacity-20 backdrop-blur-md`}
      >
        <Header />
        <main className="col-span-2">
            <TodoForm onAdd={addTodoHandler} />
            <TodoList
              onCheck={checkTodoHandler}
              todos={allTodos}
              onEdit={editTodoHandler}
              onDelete={deleteTodoHandler}
            />
        </main>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
