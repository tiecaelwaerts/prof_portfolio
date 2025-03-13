import { useState } from "react";
import emailjs from 'emailjs-com';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else setMessage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleEmptyFields()) {
            sendEmail();
        }
    };

    const handleEmptyFields = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!name.trim()) {
            setError('Name is required');
            return false;
        }
        if (!email.trim()) {
            setError('Email is required');
            return false;
        }
        if (!emailPattern.test(email)) {
            setError('Your email is invalid');
            return false;
        }
        if (!message.trim()) {
            setError('Message is required');
            return false;
        }
        
        setError('');
        return true;
    };

    const sendEmail = () => {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_99wga6h', 'template_4bpbtvo', templateParams, 'Oi6-0ZpthgcZC6xJU')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccess('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.error('FAILED...', err);
                setError('Failed to send your message. Please try again later.');
            });
    };

    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">Contact Me</h2>

            {/* Contact Info Section */}
            <div className="contact-info">
                <div className="contact-info-item">
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">tiecaelwaerts@gmail.com</p>
                </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="text"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="email"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        className="form-textarea"
                        rows={5}
                    />
                </div>
                {error && <p className="form-error">{error}</p>}
                {success && <p className="form-success">{success}</p>}
                <button 
                    type="submit" 
                    className="form-submit-button"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
