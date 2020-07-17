import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskQ from './Task';
import { status } from '../consts/status';

const tasks = [
  {
    id: uuidv4(),
    title: 'Teach callbacks',
    status: status.pending,
  }, 
  {
    id: uuidv4(),
    title: 'State between components',
    status: status.inProgress,
  }, 
  {
    id: uuidv4(),
    title: 'PropTypes',
    status: status.done,
  }, 
];


const List = () =>  {

  const [taskList, setTaskList] = useState(tasks);
  const [inputText, setInputText] = useState('');

  const handleAddTaskClick = () => {
    const newTask = {
      id: uuidv4(),
      title: inputText,
      status: status.pending,
    };
    setTaskList([...taskList, newTask]);
  }

  const childClick = (id, st) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id ){
        return {...task, status: st};
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  return (
    <>
      <h1>TO DO List</h1>
      <ul className="list-group">
        { 
          taskList.map(({title, status, id}) => (
            <TaskQ 
              title={title} 
              status={status} 
              id={id} 
              onClick={childClick}
            />
          ))
        }
      </ul>
      <div className="text-center">
        <div className="form-group">
          <label>
            Title
          </label>
          <input 
            type="text"
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
            className="form-control"
          />
        </div>
        <button
          onClick={handleAddTaskClick}
          className="btn btn-primary"
        >
          Add new task
        </button>
      </div>
    </>
  );
};

export default List;