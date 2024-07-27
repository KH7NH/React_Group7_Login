import imgMain from '../Assets/image.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Login = () => {
    return (
        <div className="login-container">
            <img src={imgMain} />
            <div className='form-login-container'>
                <Form className='form-login'>
                    <Form.Group className="mb-3 form-email" controlId="formBasicEmail">
                        <div className="input-icon">
                            <FaUser className="icon" />
                            <Form.Control type="email" placeholder="Username" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 form-password" controlId="formBasicPassword">
                        <div className="input-icon">
                            <MdKey className="icon" />
                            <Form.Control type="password" placeholder="Password" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <Button className='btn-sub' variant="primary" type="submit">
                        Sign in
                    </Button>
                    <div>
                        <Form.Text className="text-muted">
                            Forgot password?
                        </Form.Text>
                        <Form.Text className="sign-up">
                            Sign up
                        </Form.Text>
                    </div>
                </Form>
            </div>
        </div>

    )
}
export default Login