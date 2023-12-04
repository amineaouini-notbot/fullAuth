import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = () =>{
    const [password, onChangePass] = useState('')
    const [email, onChangeEmail] = useState('')
    const onClick = (e) => {
        e.preventDefault()
    }
    return (
        <div>
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
                        <Button onclick={onClick} variant="primary" type="submit">
                            Sign In
                        </Button>

                    <hr style={{color: 'white'}}></hr>
                

                    <a href="/register">register</a>
                </div>
            
            </div>
        </div>
    )
}

export default SignIn;
