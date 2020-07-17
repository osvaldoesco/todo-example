import React from 'react';
import PropTypes from 'prop-types';

import { status as statusTypes } from '../consts/status';


const Task = ({title, status, id, onClick}) =>  {


  const button = () => {
    if(status === statusTypes.done) {
      return;
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
  }

  return (
    <li className="list-group-item text-left">
      {`${title} | ${status} `}
      {button()}
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