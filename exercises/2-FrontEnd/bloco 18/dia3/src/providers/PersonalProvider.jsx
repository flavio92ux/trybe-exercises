import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfessionalContext from '../context/ProfessionalContext';

function ProfessionalProvider({ children }) {
  const [tasks, setTasks] = useState(['a', 'b']);
  const context = { tasks, setTasks };

  return (
    <ProfessionalContext.Provider value={context}>
      {children}
    </ProfessionalContext.Provider>
  );
}

ProfessionalProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProfessionalProvider;
