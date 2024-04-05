"use client"

import { useState, useEffect } from 'react';

const FormComponent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [failureMessage, setFailureMessage] = useState(false);

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const validationMessage = input.nextElementSibling;
                if (
                    validationMessage.classList.contains('mail-need') ||
                    validationMessage.classList.contains('msg-need')) {
                    validationMessage.style.display = 'none';
                }
            });
        });
    }, []);

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const SendMail = () => {
        // Regular expressions for email and phone number validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic form validation
       
        if (!email || !emailRegex.test(email)) {
            document.querySelector('.mail-need').style.display = 'block';
            document.getElementById("Email").focus();
            return;
        }
        
        if (!message) {
            document.querySelector('.msg-need').style.display = 'block';
            document.getElementById("message").focus();
            return;
        }

        // Send mail
        Email.send({
            SecureToken: "a14feaee-6fc6-4869-ada1-2ce00c74c30e",
            To: "kg256853@gmail.com",
            From: "kg256853@gmail.com",
            Subject: "New Mail From kval.vercel.app",
            Body: "Email: " + email + "<br/> Message: " + message
        }).then(
            message => {
                console.log(message);
                if (message === 'OK') {
                    setSuccessMessage(true);
                    setEmail('');
                    setMessage('');
                    setTimeout(() => {
                        setSuccessMessage(false);
                    }, 5000);
                } else {
                    setFailureMessage(true);
                    setTimeout(() => {
                        setFailureMessage(false);
                    }, 5000);
                }
            }
        );
    };

    return (
        <div className="mail-container">
            <form>
                
                <input type="email" id="Email" required placeholder="Enter Your Email*" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                <div className="mail-need valid-need" style={{ display: 'none' }}>Enter a valid email address</div>

                <textarea name="message" id="message" required placeholder="Leave Your Message*" value={message} onChange={(e) => handleInputChange(e, setMessage)}></textarea>
                <div className="msg-need valid-need" style={{ display: 'none' }}>Enter your message first</div>

                <button type='button' onClick={SendMail}><span className="iconamoon--send-fill"></span> Send Message</button>
            </form>

            {successMessage && <div className="mail-success">Message sent!</div>}
            {failureMessage && <div className="mail-failed">Message not sent.</div>}
        </div>
    );
};

export default FormComponent;
