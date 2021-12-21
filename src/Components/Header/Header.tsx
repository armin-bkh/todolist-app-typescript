import { SiTypescript, SiReact } from "react-icons/si";

interface headerProps {
  todosLength: number
}

export const Header = ({ todosLength }: headerProps) => {
  return (
    <header className={`flex h-10 items-center col-span-3`}>
      <h1 className={`mr-auto text-4xl font-bold flex items-center`}>Todo List <span className="text-sm h-8 w-8 ml-10 bg-opacity-40 shadow-lg shadow-cyan-600/30 backdrop-blur-lg rounded-full bg-black flex items-center justify-center px-2">{todosLength || null}</span></h1>
      <div
        className={`bg-black bg-opacity-40 backdrop-blur-lg rounded-md mr-2 flex items-center w-52 px-2 py-2 shadow-lg shadow-cyan-600/30`}
      >
        <SiTypescript className="mr-2" /> TypeScript
      </div>
      <div
        className={`bg-black bg-opacity-40 backdrop-blur-lg rounded-md flex items-center w-52 px-2 py-2 shadow-lg shadow-cyan-600/30`}
      >
        <SiReact className="mr-2" />
        React.js
      </div>
    </header>
  );
};
