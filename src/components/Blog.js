import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { collection, getDoc, where } from 'firebase/firestore'
import { db } from '../firebase'

export default function Blog() {
    let {id} = useParams()
    let [blog, setBlog] = useState({})
    useEffect(()=>{
        getDoc(collection(db, 'blogs', where('id', '==', id)))
        .then(blog => setBlog(blog.data()))
        .catch(err => console.log(err))
    })
    
  return (
    <div style={{height: '100vh'}}>
        <Nav></Nav>
        <div>
            
        </div>

    </div>
  )
}
