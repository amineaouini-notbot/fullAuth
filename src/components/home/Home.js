import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import NotVerified from "./NotVerified";

const Home = ({isVerified}) =>{
    const navigate = useNavigate()
    
    const handleLogout = () =>{
        signOut(auth)
        .then(()=>{
            navigate('/signin')
        })
        .catch(error => console.log(error))
    }
    return (
        <div style={{height: '100vh'}}>
            <nav style={{height: '5vh'}}>
                <Button onClick={handleLogout} style={{float: 'right', marginRight: '5px', marginTop: '5px'}} variant="light">Logout</Button>
            </nav>
            <hr style={{color: 'white'}}></hr>
            {!isVerified ?
            (<NotVerified/>): <div></div>}
            
        </div>
    )
}

export default Home;
