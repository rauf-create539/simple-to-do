import { useState } from 'react'
import Add from './Components/Add';
import Task_List from './Components/Task_List';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
    <Add addTask={addTask} />
    <Task_List tasks={tasks} />
    </>
  );
}

export default App;
