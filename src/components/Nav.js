import { useNavigate, Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import Button from 'react-bootstrap/Button'

const Nav = () =>{
    const navigate = useNavigate()
    
    const handleLogout = () =>{
        signOut(auth)
        .then(()=>{
            navigate('/signin')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <nav style={{height: '5vh'}}>
                <Link to='/' style={{ backgroundColor: 'white', color:'black', textDecoration: 'none', float: 'left', marginLeft: '5px', borderRadius: '5px', padding: '6px', marginTop: '5px'}}>My Blogs</Link>
                <Link to='/createBlog' style={{ backgroundColor: '#57ff6d', color:'black', textDecoration: 'none', float: 'left', marginLeft: '5px', borderRadius: '5px', padding: '6px', marginTop: '5px'}}>New Blog</Link>
                <Button onClick={handleLogout} style={{float: 'right', marginRight: '5px', marginTop: '5px'}} variant="light">Logout</Button>
            </nav>
            <hr style={{color: 'white'}}></hr>
        </div>
    )
}

export default Nav