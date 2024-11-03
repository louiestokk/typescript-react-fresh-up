import React,{useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models';
import ListOfTodos from './components/ListOfTodos';
import { useAppSelector } from './redux/hooks';

const App:React.FC =()=> {
  const [todo, setTodo] = useState<string>("")
const [listTodos, setlistTodos] = useState<Todo[]>([])
const {task} = useAppSelector((state)=> state.task)
const handleAdd =(e: React.FormEvent)=>{
  e.preventDefault()
  if(todo){
    setlistTodos([...listTodos, {id:Date.now(),todo,isDone:false}])
    setTodo('')
  }
}
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Veckans arbetsuppgifter</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ListOfTodos todos={listTodos} setlistTodos={setlistTodos} todo={todo}/>
    </div>
  );
}

export default App;
