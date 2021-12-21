import { ChangeEvent } from 'react';
import todoImage from '../../Assets/SVG/Mobile note list-amico.svg';
import { SelectBox } from '../Common/SelectBox/SelectBox';

interface sideBarProps { 
     onFilter: (value: string) => void,
     filter: string,
}

export const SideBar = ({ filter, onFilter }: sideBarProps) => {
    return (
        <aside className='flex flex-col my-10 lg:my-0 justify-between row-start-2 lg:row-span-1'>
            <SelectBox value={filter} onFilter={onFilter} />
            <img className={`hidden lg:block drop-shadow-lg`} src={todoImage} alt="todo image" />
        </aside>
    )
}