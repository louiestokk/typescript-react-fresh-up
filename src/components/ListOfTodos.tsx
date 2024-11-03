import React,{useState} from 'react'
import { Todo } from '../models'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { useAppSelector } from '../redux/hooks'
interface Props {
    todos:Todo[];
    setlistTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todo:string
}

const ListOfTodos:React.FC<Props> = ({todos,setlistTodos,todo}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, seteditTodo] = useState<string>('edit text by typing')
    const uppgifter = useAppSelector((state)=> state.task)

    const handleDone = (id:number) => {
        setlistTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
    }

    const handleDelete = (id:number) =>{
        setlistTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (id:number,e:React.FormEvent)=>{
        setEdit(true)
        e.preventDefault();
    }
    const handleChange =(e:React.FormEvent,id:number) =>{
               setlistTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
    }
    console.log(uppgifter)
  return (
    <div style={{marginTop:'25px'}}>
        {todos.map((el,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',width:'300px',border:'2px solid black',justifyContent:'space-between'}}>
          {edit? <input type='text' placeholder='text' onChange={(e)=>handleChange(e,el.id)}/>:<p>{el.todo}</p>}
                <article style={{marginRight:'1rem'}} onClick={(e)=> handleEdit(el.id,e)}>
                    <span>
                        <AiFillEdit />
                    </span>
                    <span style={{margin:'0 1.5rem'}} onClick={()=> handleDelete(el.id)}>
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