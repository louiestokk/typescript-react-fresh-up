import React ,{useRef}from 'react'

interface Props {
    todo:String;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}
const InputField:React.FC<Props> = ({setTodo,handleAdd}) => {
  const inputRef =useRef(null)
  return (
    <form className='form'>
        <input ref={inputRef} onChange={(e)=> setTodo(e.target.value)} type='input' placeholder='Enter task'/>
        <button type='submit' onClick={handleAdd}>GO</button>
    </form>
  )
}

export default InputField