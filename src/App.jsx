import { useState } from 'react'
import Add from './Components/Add';
import Task_List from './Components/Task_List';

function App() {

  const [tasks, setTasks] = useState([]);

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (indexToUpdate) => {
    const newTask = prompt("Edit task: ");
    if(newTask && newTask.trim() !== "") {
      const updateTasks = tasks.map((task, i) => 
          i === indexToUpdate ? newTask : task
      );
      setTasks(updateTasks);
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center bg-gradient-to-bl from-blue-400 to-purple-500'>
    
    <div className='flex flex-col'>
      <header className='text-2xl font-bold h-[100px] mt-6'>
          <h1 className='text-center'>Simple To-Do-List App</h1>
      </header>

      <div>
          <Add addTask={addTask} />
      </div>

      <Task_List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>

    </div>
  );
}

export default App;
