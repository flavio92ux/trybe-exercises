import React, { useContext } from 'react';
/* import PropTypes from 'prop-types'; */
import PersonalContext from '../context/PersonalContext';

function Tasks() {
  const { tasks } = useContext(PersonalContext);
  return (
    <ul>
      {tasks.map((task) => <li>{task}</li>)}
    </ul>
  );
}

/* Tasks.propTypes = {

}; */

export default Tasks;
