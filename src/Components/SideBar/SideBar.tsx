import { ChangeEvent } from 'react';
import todoImage from '../../Assets/SVG/Mobile note list-amico.svg';
import { SelectBox } from '../Common/SelectBox/SelectBox';

interface sideBarProps { 
     onFilter: (value: string) => void,
     filter: string,
}

export const SideBar = ({ filter, onFilter }: sideBarProps) => {
    return (
        <aside>
            <SelectBox value={filter} onFilter={onFilter} />
            <img className={`drop-shadow-lg`} src={todoImage} alt="todo image" />
        </aside>
    )
}