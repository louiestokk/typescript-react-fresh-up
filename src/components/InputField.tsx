import React ,{useRef}from 'react'

interface Props {
    todo:String;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}
const InputField:React.FC<Props> = ({setTodo,handleAdd}) => {
  const inputRef =useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur()
    }} className='form'>
        <input ref={inputRef} onChange={(e)=> setTodo(e.target.value)} type='input' placeholder='Enter task'/>
        <button type='submit' >GO</button>
    </form>
  )
}

export default InputField