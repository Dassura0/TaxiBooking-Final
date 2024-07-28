import React, { useState } from 'react';
import customerService from '../../services/customerService';  // Import default export
const { driverSignUp } = customerService;  // Destructure functions from the imported object

const CustomerSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await driverSignUp(username, password, email, phoneNumber);  // Call the function
            setMessage('Signup successful');
        } catch (error) {
            setMessage('Signup failed');
        }
    };

    return (
        <div>
            <h2>Customer Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default CustomerSignup;
