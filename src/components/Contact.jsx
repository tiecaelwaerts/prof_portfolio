import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setMessage(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    }

    const handleEmptyFields = () => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (name === '') {
            setError('Name is required');
            return false;
        } else if (email === '') {
            setError('Email is required');
            return false;
        } else if (!pattern.test(email)) {
            setError('Your email is invalid');
            return false;
        } else if (message === '') {
            setError('Message is required');
            return false;
        } else {
            setError('');
        }

        return true;
    }

    return (
        <div>
            <form className onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className>Name:</label>
                    <input 
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="email" className>Email:</label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className>
                    <label htmlFor="message" className>Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        className="form-control"
                        rows={10}
                    />
                </div>
                <p className>{error}</p>
                <button type="submit" className>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;