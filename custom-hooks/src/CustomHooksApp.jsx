import axios from "axios";
import "./App.css"
import { useEffect, useState } from "react"


function useTodos(n) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const value = setInterval(() => {
            axios.get(`https://sum-server.100xdevs.com/todos`)
                .then((res) => {
                    setTodos(res.data.todos);
                })
        }, n * 1000)

        axios.get(`https://sum-server.100xdevs.com/todos`)
            .then((res) => {
                setTodos(res.data.todos);
            })

        return () => {
            clearInterval(value);
        }
    }, [n])

    return todos;
}

export default function App() {
    const todos = useTodos(5);
    return (
        <>
            {todos.map(todo => <Track todo={todo} />)}
        </>
    )
}

function Track({ todo }) {
    return <>
        {todo.title}
        <br />
        {todo.description}
        <br />
    </>
}