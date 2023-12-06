import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebase'
const Register = () =>{
    const navigate = useNavigate()
    const [email, onChangeEmail] = useState('')
    const [password, onChangePass] = useState('')
    
    const onClick = () =>{
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            sendEmailVerification(userCredential.user)
            navigate('/')

        })
        .catch(error =>{
            const errCode = error.code;
            const errorMessage = error.message;
            console.log(errCode, errorMessage);
        })
    }
    return (
        <div id="register-content" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <div id="register" style={{ padding: '10px' ,border: '2px solid white', borderRadius: '7px'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label style={{color:'white'}}>Email address</Form.Label>
                        <Form.Control onChange={e => onChangeEmail(e.target.value)} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label  style={{color:'white'}}>password</Form.Label>
                        <Form.Control onChange={e => onChangePass(e.target.value)} type='password' placeholder="write your password" />
                    </Form.Group>
                    </Form> 
                    <Button onClick={onClick} variant="primary" type="submit">
                        Register
                    </Button>
                    <hr style={{color: 'white'}}></hr>
            

                <a href="/signin">signin</a>
            </div>
            
        </div>
    )
}

export default Register;
