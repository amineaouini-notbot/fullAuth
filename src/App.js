import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Home from './components/home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import NewBlog from './components/NewBlog';

function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  const [isVerified, setVerified] = useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){

        if(user.emailVerified){ setVerified(true) }
        setLoggedIn(user.uid)
      }
      else { setLoggedIn(null); setVerified(null) }

    })
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? (<Home isVerified={isVerified}/>) : <Navigate to='/register' replace={true}/> }/>
        <Route path='/register' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<Register/>)}/>
        <Route path='/signin' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<SignIn/>)}/>
        <Route path='/createBlog' element={loggedIn ? (<NewBlog loggedIn={loggedIn}/>) : <Navigate to='/register' replace={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
