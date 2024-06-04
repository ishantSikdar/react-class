import { useRecoilValue } from "recoil";
import { todoAsyncAtomFamily, todoAtomFamily } from "./store";
import './App.css'

export default function App() {
    return (
        <>
            {/* <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} /> */}

            <TodoAsync id={1} />
            <TodoAsync id={2} />
            <TodoAsync id={3} />
            <TodoAsync id={3} />
         
        </>
    )
}

function Todo({ id }) {
    const todos = useRecoilValue(todoAtomFamily(id));
    return <p>{todos.todo}, {todos.desc}</p>
}

function TodoAsync({ id }) {
    const todos = useRecoilValue(todoAsyncAtomFamily(id));
    return <p>{todos.title}, {todos.description}</p>
}