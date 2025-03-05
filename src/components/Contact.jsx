import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else setMessage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleEmptyFields()) {
            setName('');
            setEmail('');
            setMessage('');
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

    return (
        <div className="max-w-lg mx-auto p-6 bg-white border-4 border-blue-500 shadow-lg rounded-lg">
            <h2 className="text-center text-2xl font-bold text-red-600">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold text-blue-700">Name:</label>
                    <input 
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="text"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold text-blue-700">Email:</label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="email"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-semibold text-blue-700">Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        className="w-full p-2 border rounded-lg"
                        rows={5}
                    />
                </div>
                {error && <p className="text-red-500 font-semibold">{error}</p>}
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
