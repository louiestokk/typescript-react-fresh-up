import React from 'react'
import { Todo } from '../models'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
interface Props {
    todos:Todo[];
    setlistTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListOfTodos:React.FC<Props> = ({todos,setlistTodos}) => {
    const handleDone = (id:number) => {
        setlistTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div style={{marginTop:'25px'}}>
        {todos.map((el,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',width:'300px',border:'2px solid black',justifyContent:'space-between'}}>
                <p>{el.todo}</p>
                <article style={{marginRight:'1rem'}}>
                    <span>
                        <AiFillEdit />
                    </span>
                    <span style={{margin:'0 1.5rem'}}>
                        <AiFillDelete />
                    </span>
                    <span onClick={()=> handleDone(el.id)}>
                        <MdDone />
                    </span>
                </article>
            </div>
        ))}
    </div>
  )
}

export default ListOfTodos