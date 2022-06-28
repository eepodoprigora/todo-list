import { useState} from "react";
import {connect} from "react-redux";
import {addTodos} from "../redux/reducer";
import {GoPlus} from "react-icons/go";
import {motion} from "framer-motion";

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
}
const Todos = (props) => {
    console.log(props)
    const [todo, setTodo] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const add = () => {
        if (todo === '') {
            setError('Сначала нужно ввести что-нибудь...')
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false
            })
            setTodo('')
        }
    }

    return (<>
        <div className='addTodos'>
            <input type='text' onFocus={() => setError('')} onChange={(e) => handleChange(e)}
                   className='todo-input'
                   value={todo}/>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className='add-btn'
                onClick={() => add()}>
                <GoPlus/>
            </motion.button>
            <br/>
        </div>
        <p className='empty'>{error}</p>
    </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)