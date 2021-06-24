import React from 'react';
import Tasks from './components/Tasks';
import ProfessionalProvider from './providers/PersonalProvider';

function App() {
  return (
    <div>
      <ProfessionalProvider>
        <h1>Personal Tasks</h1>
        <Tasks />
      </ProfessionalProvider>

    </div>
  );
}

export default App;
