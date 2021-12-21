import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteSweep, MdOutlineEdit } from "react-icons/md";
import { useTransition, animated } from "react-spring";
interface todoItemProps {
  onCheck: () => void;
  onEdit: () => void;
  onDelete: () => void;
  checked: boolean;
  value: string;
}

export const TodoItem = ({
  checked,
  value,
  onDelete,
  onEdit,
  onCheck,
}: todoItemProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const transitions = useTransition(isShow, {
    from: { x: 20, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -20, opacity: 0 },
  });

  return (
    <li
      className={`shadow-lg shadow-cyan-500/30  flex relative items-center justify-between bg-black bg-opacity-40 rounded-md py-2 px-4 mb-4`}
    >
      <p className={`flex-1 cursor-pointer  ${
        checked ? "decoration-cyan-800 line-through text-cyan-900" : null
      }`} onClick={onCheck}>{value}</p>
      <BsThreeDotsVertical
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        className="cursor-pointer"
      />
      {transitions((style, item) =>
        item ? (
          <animated.div
            className="absolute backdrop-blur-sm shadow-md shadow-cyan-500/50 block z-50 bg-cyan-500 text-cyan-900 right-7 top-11 w-48 p-3 rounded-md"
            style={style}
          >
            <TodoMore onEdit={onEdit} onDelete={onDelete} />
          </animated.div>
        ) : null
      )}
    </li>
  );
};

interface todoMoreProps {
  onDelete: () => void;
  onEdit: () => void;
}

const TodoMore = ({ onEdit, onDelete }: todoMoreProps) => {
  return (
    <ul className="w-full text-lg">
      <li
        className="py-1 flex items-center justify-between cursor-pointer"
        onClick={onDelete}
      >
        Delete
        <MdDeleteSweep />
      </li>
      <li
        className="py-1 flex items-center justify-between cursor-pointer"
        onClick={onEdit}
      >
        Edit
        <MdOutlineEdit />
      </li>
    </ul>
  );
};
