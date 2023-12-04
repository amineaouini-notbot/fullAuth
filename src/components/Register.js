import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
const Register = () =>{
    const [email, onChangeEmail] = useState('')
    const [password, onChangePass] = useState('')
    const [checkPass, onChangeCheckPass] = useState('')
    
    const onClick = (e) =>{
        e.preventDefault()
        console.log(email, password)
        if(checkPass === password){
        }
        else{
            alert('your password is not similar to writen pass word check!!')
        }
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
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label  style={{color:'white'}}>check password</Form.Label>
                        <Form.Control onChange={e => onChangeCheckPass(e.target.value)} type='password' placeholder="write your pass one more time" />
                    </Form.Group> 
                    </Form> 
                    <Button onclick={e =>onClick(e)} variant="primary" type="submit">
                        Register
                    </Button>
                    <hr style={{color: 'white'}}></hr>
            

                <a href="/signin">signin</a>
            </div>
            
        </div>
    )
}

export default Register;
