import './App.css';
import { useEffect, useState } from 'react';
import TodoContainer from './TodoContainer';
function App() {

const [json , setJson] = useState([])

const [loading , setLoading] = useState(false)

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
  .then((res) => res.json())
  .then((json)=>{
    setTimeout(() => {
      setJson(json)
      setLoading(true);
    }, 1000);
  })
})

  return (

      <div className='App'>

        
      <h1 className='todo-heading'>TODO LIST</h1>

      <h3 className='todo-heading'>Todo Taks to Do...</h3>

        <div style={{margin:'5px'}}>
        {loading ? (
          <TodoContainer
          
          jsonTodos = {json}

          />
        ):(
          <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>

        )}
        </div>

      </div>
      
  );
}

export default App;
