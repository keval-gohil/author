"use client"

import { useState, useEffect } from 'react';

const FormComponent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
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

        // Set sending state to true
        setSending(true);

        // Send mail
        Email.send({
            SecureToken: "ceaa02f9-d2b3-47ed-ada7-af024a9afa77",
            To: "kg256853@gmail.com",
            From: "kg256853@gmail.com",
            Subject: "New Mail From kval app",
            Body: "Email: " + email + "<br/> Message: " + message
        }).then(
            message => {
                console.log(message);
                if (message === 'OK') {
                    setSuccessMessage(true);
                    // setEmail('');
                    // setMessage('');
                    setSending(false); // Reset sending state
                    setTimeout(() => {
                        setSuccessMessage(false);
                    }, 5000);
                } else {
                    setFailureMessage(true);
                    setSending(false); // Reset sending state
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

                <textarea type="msg" name="message" id="message" required placeholder="Leave Your Message*" value={message} onChange={(e) => handleInputChange(e, setMessage)}></textarea>
                <div className="msg-need valid-need" style={{ display: 'none' }}>Enter your message first</div>

                <button type='button' onClick={SendMail} disabled={sending}>{sending ? 'Sending...' : <><span className="iconamoon--send-fill"></span> Send Message</>}</button>
            </form>

            {successMessage && <div className="mail-success"><i className='typcn--tick'></i> Message has been sent!</div>}
            {failureMessage && <div className="mail-failed">Something went wrong!</div>}
        </div>
    );
};

export default FormComponent;
