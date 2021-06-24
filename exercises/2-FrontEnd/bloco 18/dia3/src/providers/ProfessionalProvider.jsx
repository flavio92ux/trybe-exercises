import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonalContext from '../context/PersonalContext';

function PersonalProvider({ children }) {
  const [tasks, setTasks] = useState(['a', 'b']);
  const context = { tasks, setTasks };

  return (
    <PersonalContext.Provider value={context}>
      {children}
    </PersonalContext.Provider>
  );
}

PersonalProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PersonalProvider;
