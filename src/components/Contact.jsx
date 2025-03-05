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
        <div className="max-w-lg mx-auto p-8 bg-white border-4 border-blue-500 shadow-xl rounded-lg">
            <h2 className="text-center text-3xl font-bold text-red-600">Contact Me</h2>

            {/* Contact Info Section */}
            <div className="mt-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="font-semibold text-blue-700">Email</p>
                    <p className="text-gray-700">tiecaelwaerts@gmail.com</p>
                </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-semibold text-blue-700 mb-1">Name:</label>
                    <input 
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-blue-700 mb-1">Email:</label>
                    <input 
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-semibold text-blue-700 mb-1">Message:</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleEmptyFields}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows={5}
                    />
                </div>
                {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
                <button 
                    type="submit" 
                    className="w-full py-3 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
