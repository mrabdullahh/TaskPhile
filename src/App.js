import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Showtask from './components/ShowTask';

function App() {
  return (
    <div className='container'>
      <Header />
      <AddTask />
      <Showtask />
    </div>
  );
}

export default App;
