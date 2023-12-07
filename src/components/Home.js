import { Button } from "react-bootstrap";
import { sendEmailVerification, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = ({isVerified}) =>{
    const navigate = useNavigate()
    const [waitCount, setwaitCount] = useState(null)
    const verifyEmail = () =>{
        
        if(!waitCount){
            setwaitCount(30)
            console.log(auth.currentUser)
            sendEmailVerification(auth.currentUser)
        }
        
    }
    useEffect(()=>{
        if(waitCount > 0){
            setTimeout(()=>{setwaitCount(waitCount-1)}, 1000)

        } else {
            setwaitCount(null)
        }
    }, [waitCount])
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
            <div style={{height: '6vh', borderBottom: isVerified ? '1px solid #bfffb3' : '1px solid #ff8a8a', width: '50vw', marginLeft: '25vw' }}>
                    <p style={{color:"white"}}>{isVerified ? 'Email is Verified' :"Email is not Verified"}</p>
                
            </div>
            <div style={{marginTop: '30vh',width: "20vw", marginLeft: '40vw'}}>
                <div onClick={verifyEmail} style={{userSelect: 'none' ,padding: '5px',border: '1px solid white', borderRadius: '5px',backgroundColor: 'white', width: '12vw', marginLeft: '5vw'}}>Resend Verification Email</div>
                {waitCount? <p style={{color:"white"}}>wait: {waitCount} to resend email</p>: <div></div>}
            </div>
            
        </div>
    )
}

export default Home;
