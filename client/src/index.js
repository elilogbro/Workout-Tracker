import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { SelectedRoutineProvider } from './context/SelectedRoutineContext';
import { IsInEditModeProvider } from './context/IsInEditModeContext';
import { SelectedExerciseProvider } from './context/SelectedExerciseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <SelectedRoutineProvider>
        <IsInEditModeProvider>
          <SelectedExerciseProvider>
            <App />
          </SelectedExerciseProvider>
        </IsInEditModeProvider>
      </SelectedRoutineProvider>
    </UserProvider>
  </BrowserRouter>
);
