import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, where } from 'firebase/firestore'
import { db } from '../firebase'

export default function Blog() {
    let {id} = useParams()
    let [blog, setBlog] = useState({})
    useEffect(()=>{
        const blogRef = doc(db, 'blogs', id)
        getDoc(blogRef)
        .then(blogSnap => setBlog(blogSnap.data()))
        .catch(err => console.log(err))
        
    }, [id])
    
  return (
    <div style={{height: '100vh'}}>
        <Nav></Nav>
        <div>
            <div >
                <h2 style={{color: 'white'}}>{blog.title}</h2>
                <div style={{display: 'flex'}}>
                    <h3 style={{color: 'white'}}>Categorie:</h3>
                    <h4 style={{color: 'white', marginLeft: '30px'}}>{blog.categorie}</h4>

                </div>
                <div style={{marginLeft: '10vw', marginTop: '10px',width: '80vw', height: '73vh', borderRadius: '5px', backgroundColor: 'white'}}>
                    <p style={{color: 'black', textAlign: 'left', wordBreak: 'break-all', marginLeft: '10px', marginRight: '10px'}}>{blog.markDown}</p>
                </div>
                
            </div>

        </div>

    </div>
  )
}
