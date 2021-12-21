import { SiTypescript, SiReact } from "react-icons/si";

export const Header = () => {
  return (
    <header className={`flex h-10 items-center col-span-3`}>
      <h1 className={`mr-auto text-4xl font-bold`}>Todo List</h1>
      <div
        className={`bg-black bg-opacity-40 backdrop-blur-lg rounded-md mr-2 flex items-center w-52 px-2 py-2`}
      >
        <SiTypescript className="mr-2" /> TypeScript
      </div>
      <div
        className={`bg-black bg-opacity-40 backdrop-blur-lg rounded-md flex items-center w-52 px-2 py-2`}
      >
        <SiReact className="mr-2" />
        React.js
      </div>
    </header>
  );
};
