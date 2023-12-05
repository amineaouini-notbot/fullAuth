import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { redirect } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){ setLoggedIn(true) }
      else { setLoggedIn(false) }

    })
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? (<Home/>) : <Navigate to='/register' replace={true}/> }/>
        <Route path='/register' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<Register/>)}/>
        <Route path='/signin' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<SignIn/>)}/>
      </Routes>
    </div>
  );
}

export default App;
