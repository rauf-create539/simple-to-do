import React from 'react'

const Task_List = ({ tasks, deleteTask, updateTask }) => {


  return (
    <div>
        <ol className='bg-white p-4 mt-4 rounded-2xl'>
            {tasks.map((task, i) => (
                <li key={i} 
                className='text-black flex justify-between items-center mb-2'>
                {task}   

                <div className='flex gap-2'>
                  <button
                  onClick={() => updateTask(i)}
                  className='bg-yellow-400 p-2 w-[100px] rounded-2xl'
                  >
                    Edit
                  </button>

                  <button
                  onClick={() => deleteTask(i)}
                  className='bg-red-500 p-2 w-[100px] rounded-2xl'
                  >
                    Delete
                  </button>
                </div>

                </li>
            ))}
        </ol>
    </div>
  );
};

export default Task_List