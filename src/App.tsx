import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Stopwatch from './components/Stopwatch';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Stopwatch />
    </div>
  );
};
