import imgMain from '../../Assets/image.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const LogupPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
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
                        <Form.Group className="mb-3 form-password" controlId="formBasicPassword">
                            <div className="input-icon">
                                <MdKey className="icon" />
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </div>
                        </Form.Group>
                        <Button className='btn-sub' variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <div>
                            <Form.Text className="sign-in" onClick={() => handleLogin()}>
                                Sign in
                            </Form.Text>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default LogupPage