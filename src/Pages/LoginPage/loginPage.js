import imgMain from "../../Assets/image.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from "../../Components/Header/Header";
import './loginPage.scss'

const LoginPage = () => {
    const navigate = useNavigate()

    const handleLogup = () => {
        navigate('/logup')
    }
    const handleForgot = () => {
        navigate('/forgotpassword')
    }
    return (
        <div>
            <Header />
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
                            <Form.Text className="text-muted" onClick={() => handleForgot()}>
                                Forgot password?
                            </Form.Text>
                            <Form.Text className="sign-up" onClick={() => handleLogup()}>
                                Sign up
                            </Form.Text>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage