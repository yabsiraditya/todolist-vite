import { useState } from 'react'
import './App.css'

function App() {
  const id = Math.random();
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Harap Isi Form Dahulu")
    } else {
      setTodoList([...todoList, {id, todoName : todo}]);
      setTodo("");
    }
  }
 
  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val) => {
        return val.id !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };
  
  console.log(todoList);

  return ( 
    <>
    <div className="bg-slate-200 w-full h-screen">
      <div className="w-[500px] h-screen mx-auto bg-white text-center p-5">
        <marquee className="text-3xl font-bold underline mb-5 text-red-500">
          Hello world!
        </marquee>
        <h1 className="text-5xl font-bold mb-5 text-center">Todo List</h1>
        <form onSubmit={handleForm}>
          <input 
            className="border-2 border-black w-full py-2 px-3 rounded-md mb-3" 
            type="text" 
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-green-500 py-2 px-3 rounded-lg border-2 border-green-700">
              + Add Todo
          </button>
        </form> 
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li 
                  key={index} 
                  className="bg-green-200 flex justify-between py-3 rounded-lg px-3 mt-3">
                  {singleTodo.todoName}{" "} 
                  <span 
                    onClick={() => deleteTodo(singleTodo.id)}
                    className="text-red-500 font-bold cursor-pointer">
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
