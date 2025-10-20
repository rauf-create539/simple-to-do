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

        <div className='flex gap-2'>

            <input
            value={listTask}
            onChange={handleInputChange}
            placeholder='Create task here'
            className='p-2 w-[600px] bg-white rounded-2xl'
            ></input>

            <button 
            className='p-3 bg-green-500 rounded-2xl'
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