import React, { useState } from 'react';

function ListCreator() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-xl font-semibold mb-2">Todo List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border p-2 rounded-l-lg"
                    placeholder="Enter a task"
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}

               />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                >
                    Add
                </button>
            </div>
            <ol className="list-decimal">
                {tasks.map((t, index) => (
                    <li key={index} className="text-lg">{t}</li>
                ))}
            </ol>
        </div>
    );
}

export default ListCreator;