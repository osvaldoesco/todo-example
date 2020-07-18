import React from 'react';
import PropTypes from 'prop-types';

import { status as statusTypes } from '../consts/status';


const Task = ({title, status, id, onClick, onDeleteClick}) =>  {


  const button = () => {
    if(status === statusTypes.done) {
      return (
        <button 
          onClick={() => {onClick(id, statusTypes.pending)}}
          className='btn btn-warning'
        >
          move to pending
        </button>
      );
    }
    
    if(status === statusTypes.pending) {
      return (
        <button
          onClick={() => {onClick(id, statusTypes.inProgress)}}
          className='btn btn-success'
        >
          Start
        </button>
      );
    }

    if(status === statusTypes.inProgress) {
      return (
        <button 
          onClick={() => {onClick(id, statusTypes.done)}}
          className='btn btn-primary'
        >
          Finish
        </button>
      );
    }

  }

  const deleteButton = () => {
      return(
        <button 
          onClick={() => {onDeleteClick(id)}}
          className='btn btn-danger'
        >
          Eliminar
        </button>

      );
  }

  return (
    <li className="list-group-item text-left">
      {`${title} | ${status} `}
      {button()}{deleteButton()}
    </li>
  );
};

Task.propTypes = { 
  title: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default Task;