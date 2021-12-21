import styles from './Box.module.scss';
interface boxProps {
    varaint: '500' | '700'
}

export const Box = ({ varaint }: boxProps) => {
    return (
        <div className={`w-64 h-64 bg-cyan-${varaint} absolute filter blur-2xl rounded-full shadow-xl shadow-cyan-500/50 opacity-70 transform rotate-45 -z-50 ${varaint === "500" ? styles.moving : styles.moving2}`}>
        </div>
    )
};