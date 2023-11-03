
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <motion.svg
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M100,10 L190,100 L100,190 L10,100 Z"
                    fill="transparent"
                    stroke="#64ffda"
                    strokeWidth="5">
                    <animate
                        attributeName="stroke-dasharray"
                        from="0, 240"
                        to="240, 0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </motion.path>
            </motion.svg>
        </div>
    )
}

export default Loader
