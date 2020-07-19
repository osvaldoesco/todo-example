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
  const [emptyInputText, setEmptyInputText] = useState(false);

  const handleAddTaskClick = () => {
    if(inputText !== ''){
      const newTask = {
        id: uuidv4(),
        title: inputText,
        status: status.pending,
      };
      setTaskList([...taskList, newTask]);
      setInputText('');
      setEmptyInputText(false);
    }else{
      setEmptyInputText(true);
    } 
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

  const deleteChildClick = (childId) => {
    const newTaskList = taskList.filter(({id}) => id !== childId);
    setTaskList(newTaskList);
  }

  return (
    <div >
      <h1>TO DO List</h1>
      <ul className="list-group">
        { 
          taskList.map(({title, status, id}) => (
            <TaskQ 
              title={title} 
              status={status} 
              id={id} 
              key={id}
              onClick={childClick}
              onDeleteClick={deleteChildClick}
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
        <label>
            {emptyInputText &&
              <div className="alert alert-danger" role="alert">
                El campo no puede estar vacio
              </div>
            }
        </label>
        <br></br>
        <button
          onClick={handleAddTaskClick}
          className="btn btn-primary"
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default List;