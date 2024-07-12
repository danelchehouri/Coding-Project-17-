// src/TaskGenerator.js
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  
  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const handleCompleteTask = () => {
    tasks[currentTaskIndex].isCompleted = true;
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const currentTask = tasks[currentTaskIndex];
  const motivationalMessages = [
    "Keep pushing forward!",
    "You're doing great!",
    "Stay positive and strong!",
    "Believe in yourself!",
  ];
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div>
      <FancyText title text="Task" />
      <FancyText text={`Task: ${currentTask.name}`} />
      <FancyText text={`Status: ${currentTask.isCompleted ? 'Completed ✔' : 'Pending'}`} />
      <button onClick={handleCompleteTask}>Mark as Completed</button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText title text="Motivation" />
      <FancyText text={randomMessage} />
    </div>
  );
};

export default TaskGenerator;
