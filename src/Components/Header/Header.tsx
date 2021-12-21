import { SiTypescript, SiReact } from "react-icons/si";

interface headerProps {
  todosLength: number;
}

export const Header = ({ todosLength }: headerProps) => {
  return (
    <header className={`flex h-10 items-center lg:col-span-3`}>
      <h1 className={`mr-auto text-3xl lg:text-4xl font-bold flex items-center titles`}>
        Todo List
        {
          todosLength > 0 && (
        <span className="text-sm h-8 w-8 ml-4 lg:ml-10 bg-opacity-40 shadow-lg shadow-cyan-600/30 backdrop-blur-lg rounded-full bg-black flex items-center justify-center px-2">
          {todosLength}
        </span>
          )
        }
      </h1>
      <div
        className={`bg-black main bg-opacity-40 backdrop-blur-lg rounded-md mr-2 flex items-center lg:w-52 px-2 py-2 shadow-lg shadow-cyan-600/30`}
      >
        <SiTypescript className="lg:mr-2" />{" "}
        <span className="hidden lg:block"> TypeScript </span>
      </div>
      <div
        className={`bg-black main bg-opacity-40 backdrop-blur-lg rounded-md flex items-center lg:w-52 px-2 py-2 shadow-lg shadow-cyan-600/30`}
      >
        <SiReact className="lg:mr-2" />
        <span className="hidden lg:block">React.js</span>
      </div>
    </header>
  );
};
