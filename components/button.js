import { motion } from "framer-motion"
import * as React from "react";

class Button extends React.Component {
    render() {
        return (
            <motion.div
                class = "h-40 w-40 bg-white flex content-center rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
            />
        )
    }
}


export default Button;