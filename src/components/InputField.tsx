import React ,{useRef,useState}from 'react'
import { TextField,Button } from '@mui/material';
import { addTask } from '../redux/feature/task/taskSlice';
import { useAppDispatch } from '../redux/hooks';
interface Props {
    todo:String;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}
const InputField:React.FC<Props> = ({setTodo,handleAdd}) => {
  const inputRef =useRef<HTMLInputElement>(null)
  const [newTask, setnewTask] = useState<string>('')
  const dispatch = useAppDispatch()
  
  const handleClick = () =>{
    dispatch(addTask(newTask))
  }
  return (
    <div>
   {/* <form onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur()
      }} className='form'>
          <input  ref={inputRef} onChange={(e)=> setTodo(e.target.value)} type='input' placeholder='Enter task'/>
          <button type='submit' >GO</button>
      </form> */}
      <div style={{background:'#F0F0F0',height:'300px',marginTop:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h4>Lägg till arbetsuppgifter för veckan</h4>
            <TextField onChange={(e)=> setnewTask(e.target.value)} variant='outlined' placeholder='Lägg till ny uppgift' style={{background:'white',width:'280px'}}/>
            <Button onClick={handleClick} variant='contained' style={{width:'280px',marginTop:'1rem',height:'3rem'}}>Lägg till</Button>
          </div>
    </div>
 
  )
}

export default InputField