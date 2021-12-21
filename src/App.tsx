import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { TodoForm } from "./Components/TodoForm/TodoForm";
import { TodoList } from "./Components/TodoList/TodoList";

export type todoState = {
  id: number,
  value: string,
  checked: boolean,
}[];

function App() {
  const [allTodos, setAllTodos] = useState<todoState | []>([]);

  useEffect(()=> {
    console.log(allTodos);
  }, [allTodos])

  const addTodoHandler = (todo: string) => {
    setAllTodos([
      ...allTodos,
      {
        id: new Date().getTime(),
        value: todo,
        checked: false,
      }
    ])
  }

  const deleteTodoHandler = (id: number) => {
    setAllTodos(prevAllTodos => prevAllTodos.filter(todo => todo.id !== id));
  }

  const editTodoHandler = (value: string, id: number) => {
    const cloneAllTodos = [...allTodos];
    const index = cloneAllTodos.findIndex(todo => todo.id === id);
    const selectedTodo = {...cloneAllTodos[index]};
    selectedTodo.value = value;
    cloneAllTodos[index] = selectedTodo;
    setAllTodos(cloneAllTodos);
  }

  const checkTodoHandler = (id: number) => {
    const cloneAllTodos = [...allTodos];
    const index = cloneAllTodos.findIndex(todo => todo.id === id);
    const selectedTodo = {...cloneAllTodos[index]};
    selectedTodo.checked = !selectedTodo.checked;
    cloneAllTodos[index] = selectedTodo;
    setAllTodos(cloneAllTodos);
  }

  return (
    <div className="h-screen p-5 text-cyan-500">
      <div className={`h-full rounded-md p-2 bg-black bg-opacity-20 backdrop-blur-md`}>
        <Header />
        <main className="mt-28 grid grid-cols-3">
          <section className="col-span-2">
          <TodoForm onAdd={addTodoHandler} />
          <TodoList onCheck={checkTodoHandler} todos={allTodos} onEdit={editTodoHandler} onDelete={deleteTodoHandler} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
