import todoImage from '../../Assets/SVG/Mobile note list-amico.svg';

export const SideBar = () => {
    return (
        <aside>
            <img className={`drop-shadow-lg`} src={todoImage} alt="todo image" />
        </aside>
    )
}