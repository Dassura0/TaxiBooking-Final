// src/components/Driver/DriverLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { driverLogin } from '../../services/driverService';

const DriverLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await driverLogin(username, password);
            navigate('/driver/dashboard'); // Redirect to driver dashboard or home
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Driver Login</h2>
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
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default DriverLogin;
