import React from 'react';
import { useState } from 'react';

const Add = ({ addTask }) => {

    const [listTask, setListTask] = useState("");

    const handleInputChange = (event) => {
        setListTask(event.target.value)

    };

    const handleClick = () => {
        if (listTask.trim() !== '') {
            addTask(listTask);
            setListTask('');
        }
    };

  return (
    <>
    
    <div>

        <header className='text-2xl font-bold'>
            <h1>Simple To-Do-List App</h1>
        </header>

        <div className='w-[500px] flex gap-2'>

            <input
            value={listTask}
            onChange={handleInputChange}
            placeholder='Create task here'
            className='border p-2 '
            ></input>

            <button 
            className='border p-2'
            onClick={handleClick}
            >
                Add task
            </button>

        </div>
    </div>

    </>
  )
}

export default Add