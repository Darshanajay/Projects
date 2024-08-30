import React, { useEffect, useRef, useState } from 'react'
import todo_icon from "../assets/todo_icon.png";
import TodoItems from './TodoItems';



const Todo = () => {

  const inpref = useRef();
  const [todos, setTodos] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);

  const add = () => { 
    const inpText = inpref.current.value.trim();

    if (inpText === "") {
      return null;
    }else{

    const newTodo = {
      id: Date.now(),
      text: inpText,
      isComplete: false,
    }
    setTodos((prev)=> [...prev,newTodo]);
    inpref.current.value = '';
   }
  }

  const dlttodo = (id) => {
    setTodos((prev)=>{
      return prev.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete};
        }
        return todo;
      })
    })
  }
   
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <div className=' bg-white place-self-center w-11/12 max-w-md flex flex-col min-h-[550px] rounded-xl p-7'>
        {/* -----title--- */}

        <div className="flex items-center mt-7 gap-2">
            <img src={todo_icon} alt="icon" className=' w-8 h-8' />
            <h1 className=' text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* ----input box ---- */}

        <div className=' flex items-center my-7 bg-gray-200 rounded-full'>
            <input type="text" placeholder=' Enter yout todo' className=' bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' ref={inpref} />
            <button onClick={add} className=' border-none rounded-full bg-orange-600 h-14 w-32 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

        {/* ------- todo list ------- */}

        <div>
          {todos.map((item,index)=>{
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} dlttodo={dlttodo} toggle={toggle} />
          })}




          
          
        </div>
    </div>
  )
}

export default Todo