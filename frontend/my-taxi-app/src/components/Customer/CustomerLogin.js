import React, { useState } from 'react';
import customerService from '../../services/customerService';  // Import default export
const { driverLogin } = customerService;  // Destructure functions from the imported object

const CustomerLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await driverLogin(username, password);  // Call the function
            setMessage('Login successful');
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <h2>Customer Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default CustomerLogin;
