import React from 'react';
import EmployeeList from './components/EmployeeList';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <div className="app">
      <h1>Employee & Task Manager (Demo)</h1>
      <div className="grid">
        <EmployeeList />
        <TaskList />
      </div>
    </div>
  );
}
