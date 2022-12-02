import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyTodo from './MyTodo/MyTodo';
import Main from './Main/Main';
import Friend from './Friend/Friend';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/todo' element={<MyTodo />} />
        <Route path='/friends' element={<Friend />} />
      </Routes>
    </div>
  );
}

export default App;
