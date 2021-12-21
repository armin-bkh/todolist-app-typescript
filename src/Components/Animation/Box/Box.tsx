import { useSpring, animated } from 'react-spring';

interface boxProps {
    varaint: '500' | '700'
}

export const Box = ({ varaint }: boxProps) => {
    const styles = useSpring({ from: { x: 50, y: -500 }, to: {x: 400, y: -700}, loop: { reverse: true }, config: { duration: 5000 } })
    return (
        <animated.div style={styles} className={`w-64 h-52 bg-cyan-${varaint} absolute filter rounded-full shadow-xl shadow-cyan-500/50 transform rotate-45 -z-50`}>
        </animated.div>
    )
};