"use client"

import { useState, useEffect, useRef } from 'react';

const FormComponent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState([]);
    const [sending, setSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [failureMessage, setFailureMessage] = useState(false);
    const [fileError, setFileError] = useState('');
    const fileInputRef = useRef(null);

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

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);

        if (newFiles.length === 0) return;

        // Combine existing files with new files
        const updatedFiles = [...files, ...newFiles];

        // Validate file count
        if (updatedFiles.length > 5) {
            setFileError('Maximum 5 files allowed');
            return;
        }

        // Validate total size
        const totalSize = updatedFiles.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > 50 * 1024 * 1024) {
            setFileError('Total file size exceeds 50MB limit');
            return;
        }

        setFiles(updatedFiles);
        setFileError('');

        // Reset input to allow selecting same files again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    const SendMail = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

        if (fileError) {
            return;
        }

        setSending(true);

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('message', message);
            files.forEach(file => {
                formData.append('files', file);
            });

            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setSuccessMessage(true);
                setEmail('');
                setMessage('');
                setFiles([]);
            } else {
                setFailureMessage(true);
            }
        } catch (error) {
            console.error(error);
            setFailureMessage(true);
        } finally {
            setSending(false);
            setTimeout(() => {
                setSuccessMessage(false);
                setFailureMessage(false);
            }, 5000);
        }
    };

    return (
        <div className="mail-container">
            <form>
                <input
                    type="email"
                    id="Email"
                    required
                    placeholder="Enter Your Email*"
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                />
                <div className="mail-need valid-need" style={{ display: 'none' }}>
                    Enter a valid email address
                </div>

                <textarea
                    type="msg"
                    name="message"
                    id="message"
                    required
                    placeholder="Leave Your Message*"
                    value={message}
                    onChange={(e) => handleInputChange(e, setMessage)}
                ></textarea>
                <div className="msg-need valid-need" style={{ display: 'none' }}>
                    Enter your message first
                </div>

                <div className="file-upload-section">
                    <label htmlFor="file-upload" className="file-upload-label">
                        <span className="iconamoon--attachment-fill"></span>
                        Attach Files (Max 5 files, 50MB total)
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                    />
                    {fileError && <div className="file-error">{fileError}</div>}

                    <div className="file-preview">
                        {files.map((file, index) => (
                            <div key={`${file.name}-${index}`} className="file-item">
                                <span>
                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                                <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="remove-file"
                                    aria-label={`Remove ${file.name}`}
                                >
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type='button'
                    onClick={SendMail}
                    disabled={sending}
                    className={sending ? 'sending' : ''}
                    aria-busy={sending}
                >
                    {sending ? (
                        'Sending...'
                    ) : (
                        <>
                            <span className="iconamoon--send-fill"></span>
                            Send Message
                        </>
                    )}
                </button>
            </form>

            {successMessage && (
                <div className="mail-success">
                    <i className='typcn--tick'></i>
                    Message has been sent!
                </div>
            )}
            {failureMessage && (
                <div className="mail-failed">
                    <i className='typcn--warning'></i>
                    Something went wrong!
                </div>
            )}
        </div>
    );
};

export default FormComponent;