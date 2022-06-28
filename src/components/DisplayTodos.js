import React, { useState } from "react";
import { connect } from "react-redux";
import {
    completeTodos,
    removeTodos,
    updateTodos,
    makeDefault
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
        makeDefault:(id) => dispatch(makeDefault(id))
    };
};

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("all");
    return (
        <div className="displaytodos">
            <div className="buttons">
                <motion.button className='menuButton'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("active")}
                >
                    Активные
                </motion.button>
                <motion.button className='menuButton'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("completed")}
                >
                    Выполненные
                </motion.button>
                <motion.button className='menuButton'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("all")}
                >
                    Все
                </motion.button>
            </div>
            <ul>
                <AnimatePresence>
                    {props.todos.length > 0 && sort === "active"
                        ? props.todos.map((item) => {
                            return (
                                item.completed === false && (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                        makeDefault={props.makeDefault}
                                    />
                                )
                            );
                        })
                        : null}
                    {props.todos.length > 0 && sort === "completed"
                        ? props.todos.map((item) => {
                            return (
                                item.completed === true && (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                        makeDefault={props.makeDefault}
                                    />
                                )
                            );
                        })
                        : null}
                    {/* for all items */}
                    {props.todos.length > 0 && sort === "all"
                        ? props.todos.map((item) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                    makeDefault={props.makeDefault}
                                />
                            );
                        })
                        : null}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);