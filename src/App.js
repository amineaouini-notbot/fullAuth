import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Home from './components/home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import NewBlog from './components/NewBlog';
import { collection, getDocs, where } from 'firebase/firestore';
import Blog from './components/Blog';

function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  const [isVerified, setVerified] = useState(false)
  //const [allBlogs, setAllBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([])

  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){
        if(user.emailVerified){ setVerified(true) }
        setLoggedIn(user.uid)
        
      }
      else { setLoggedIn(null); setVerified(null) }

    })
    //getDocs(collection(db, 'blogs'), where('user_id', '!=', loggedIn))
    //  .then(querySnapshot => {
    //    const allBlogs = querySnapshot.docs
    //    .map(doc => ({...doc.data(), id: doc.id}))
    //    setAllBlogs(allBlogs)
    //  })
    //  .catch(err => console.log(err))
    getDocs(collection(db, 'blogs'), where('user_id', '==', loggedIn))
    .then(querySnapshot => {
      const myBlogs = querySnapshot.docs
      .map(doc => ({...doc.data(), id: doc.id}))
      setMyBlogs(myBlogs)
    })
  }, [loggedIn])
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<Register/>)}/>
        <Route path='/signin' element={loggedIn ? (<Navigate to={'/'} replace={true}/>):(<SignIn/>)}/>
        <Route path='/' element={loggedIn ? (<Home myBlogs={myBlogs} isVerified={isVerified}/>) : <Navigate to='/register' replace={true}/> }/>
        <Route path='/createBlog' element={loggedIn ? (<NewBlog loggedIn={loggedIn}/>) : <Navigate to='/register' replace={true}/>}/>
        <Route path='/blog/:id' element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
