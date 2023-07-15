import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Showtask from './components/ShowTask';

function App() {

  const [taskList, setTaskList] = useState([]);
  return (
    <div className='container'>
      <Header />
      <AddTask taskList = {taskList} setTaskList = {  setTaskList} />
      <Showtask taskList = {taskList} setTaskList = {  setTaskList} />
    </div>
  );
}

export default App;
