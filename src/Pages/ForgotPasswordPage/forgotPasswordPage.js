import Header from "../../Components/Header/Header"
import React, { useEffect, useState } from 'react';
import imgMain from '../../Assets/image.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ForgotPasswordPage = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const inputs = document.querySelectorAll('.form-password .test');

        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                // only input number
                e.target.value = value.replace(/[^0-9]/g, '');

                if (input.value.length === 1) {
                    const nextInput = inputs[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {
                    if (input.value.length === 0 && index > 0) {
                        const prevInput = inputs[index - 1];
                        if (prevInput) {
                            prevInput.focus();
                            prevInput.value = ''; // Remove chacrater
                        }
                        e.preventDefault();
                    }
                }
            });
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener('input', null);
                input.removeEventListener('keydown', null);
            });
        };
    }, []);

    useEffect(() => {
        if (counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [counter]);
    return (
        <div>
            <Header />
            <div className="forgot-container">
                <img src={imgMain} alt="Main" />
                <div className='form-forgot-container'>
                    <Form className='form-forgot'>
                        <Form.Group className="mb-3 form-password">
                            <div className="input-icon">
                                <Form.Control className='test' type="text" maxLength="1" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 form-password">
                            <div className="input-icon">
                                <Form.Control className='test' type="text" maxLength="1" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 form-password">
                            <div className="input-icon">
                                <Form.Control className='test' type="text" maxLength="1" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 form-password">
                            <div className="input-icon">
                                <Form.Control className='test' type="text" maxLength="1" />
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="countdown">
                        <p>The OTP is valid for: {counter}s</p>
                    </div>
                    <Button variant="primary" type="submit" disabled={counter > 0}>
                        Resend OTP
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default ForgotPasswordPage