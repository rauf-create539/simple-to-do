import React from 'react'

const Task_List = ({ tasks }) => {
  return (
    <div>
        <ol>
            {tasks.map((task, i) => (
                <li key={i} className='text-black'></li>
            ))}
        </ol>
    </div>
  );
}

export default Task_List