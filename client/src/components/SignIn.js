import Form from 'react-bootstrap/Form'
const SignIn = () =>{
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
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label  style={{color:'white'}}>password</Form.Label>
                            <Form.Control type='password' placeholder="write your password" />
                        </Form.Group>
                    </Form> 
                

                    <a href="/register">register</a>
                </div>
            
            </div>
        </div>
    )
}

export default SignIn;
