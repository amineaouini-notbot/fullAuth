import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
