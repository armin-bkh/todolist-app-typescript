import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDeleteSweep , MdOutlineEdit} from 'react-icons/md';

interface todoItemProps {
    onDelete: () => void,
    checked: boolean,
    value: string,
}

export const TodoItem = ({ checked, value, onDelete }: todoItemProps) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <li className={`flex relative items-center justify-between bg-black bg-opacity-40 rounded-md py-2 px-4 mb-2 ${checked ? 'decoration-cyan-500 line-through' : null}`}>
         <p>{value}</p>
            <BsThreeDotsVertical onClick={()=> setIsShow(prevIsShow => !prevIsShow)} className='cursor-pointer'/>
            {isShow && <TodoMore onDelete={onDelete} />}
        </li>
    )
};

interface todoMoreProps {
    onDelete: () => void,
}

const TodoMore = ({ onDelete }: todoMoreProps) => {
    return (
        <div  className='absolute block z-50 bg-cyan-500 text-cyan-900 right-7 top-11 w-48 p-3 rounded-md'>
            <ul className='w-full text-lg'>
                <li className='py-1 flex items-center justify-between cursor-pointer' onClick={onDelete}>Delete<MdDeleteSweep /></li>
                <li className='py-1 flex items-center justify-between cursor-pointer'>Edit<MdOutlineEdit /></li>
            </ul>
        </div>
    )
}