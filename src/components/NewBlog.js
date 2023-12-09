import { useState } from 'react'
import Nav from "./Nav"
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";

const NewBlog = ({loggedIn}) => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [categorie, setCategorie] = useState(null)
    const [markDown, setMarkDown] = useState('')

    const createBlog = async(e) => {
        e.preventDefault()
        
        let newBlog = {title, categorie, markDown, user_id: loggedIn}
        try{
            const blogRef = await addDoc(collection(db, 'blogs'), newBlog)
            console.log(blogRef)
            navigate('/')

        } catch(e){
            console.log(e)
        }
        
    }
    
    return (
        <div style={{height: '100vh'}}>
            <Nav/>
            <div id="new-blog-content">
                <Form>
                    <Form.Group controlId='formGroupTitle'>
                        <Form.Label style={{fontSize: '20px',float: 'left', color: 'white', marginLeft: '5px'}}>Title:</Form.Label>
                        <br></br>
                        <Form.Control onChange={e => setTitle(e.target.value)} type="text" style={{width: '400px'}} placeholder="Write your title!"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formGroupCategories' style={{marginTop: '50px'}}>
                        <Form.Label style={{fontSize: '20px',float: 'left', color: 'white', marginLeft: '5px'}}>Categorie:</Form.Label>
                        <br></br>
                        <Form.Select style={{width: '100px'}} defaultValue='yetToChoose' onChange={e => setCategorie(e.target.value)}>
                           <option value='yetToChoose' disabled>Select</option>
                           <option value='Fashion'>Fashion</option>
                           <option value='IT'>IT</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group style={{marginTop: '50px'}}>
                        <label style={{fontSize: '20px',float: 'left', color: 'white', marginLeft: '5px'}}>Mark Down:</label>
                        <Form.Control onChange={e => setMarkDown(e.target.value)} as='textarea' rows={12} style={{width: '80vw', marginLeft: '10vw', position: 'absolute', bottom: '20px'}}></Form.Control>
                    </Form.Group>
                    <Button onClick={createBlog} style={{position: 'absolute', top: '10vw', right: '30vw'}}>Create Blog</Button>
                </Form>

            </div>
        </div>
    )
}

export default NewBlog