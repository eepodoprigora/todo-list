import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";
import {motion} from "framer-motion";
import { IoArrowDown } from "react-icons/io5";
import './css/main.css';
function App() {
    return (
        <div className="App">
            <motion.h1
                initial={{y: -200}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 0.5}}
                whileHover={{scale: 1.1}}
            >У нас НЕ лапки, поэтому введите дело
               < IoArrowDown className='down-icon'/>
            </motion.h1>
            <motion.div
                initial={{y: 1000}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 1}}
            >
                <Todos/>
                <DisplayTodos/>
            </motion.div>
        </div>
    );
}

export default App;
