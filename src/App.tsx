import { useEffect, useState } from "react";
import { Box } from "./Components/Animation/Box/Box";
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
  const [todos, setTodos] = useState<todoState | []>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const savedAllTodos = JSON.parse(localStorage.getItem("typeTodos") || "");
    if (savedAllTodos) {
      setAllTodos(savedAllTodos);
      setTodos(savedAllTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("typeTodos", JSON.stringify(allTodos));
    filterTodosHandler(filter);
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

  const filterTodosHandler = (value: string) => {
    setFilter(value);

    if (value === "All") {
      setTodos(allTodos);
    }
    if (value === "Completed") {
      setTodos(allTodos.filter((todo) => todo.checked));
    }
    if (value === "Uncompleted") {
      setTodos(allTodos.filter((todo) => !todo.checked));
    }
  };

  return (
    <>
      <div className="min-h-screen p-5 text-cyan-500">
        <div
          className={`h-full grid grid-cols-1 lg:grid-cols-3 lg:gap-10 rounded-md p-2 bg-black bg-opacity-20 backdrop-blur-md`}
        >
          <Header
            todosLength={allTodos.filter((todo) => !todo.checked).length}
          />
          <main className="col-span-2">
            <TodoForm onAdd={addTodoHandler} />
            <TodoList
              onCheck={checkTodoHandler}
              todos={todos}
              onEdit={editTodoHandler}
              onDelete={deleteTodoHandler}
            />
          </main>
          <SideBar onFilter={filterTodosHandler} filter={filter} />
        </div>
      </div>
      {/* <Box varaint="500" /> */}
    </>
  );
}

export default App;
