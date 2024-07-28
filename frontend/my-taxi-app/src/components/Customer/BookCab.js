import React, { useState } from 'react';
import customerService from '../../services/customerService';
const { bookCab } = customerService;

const BookCab = () => {
    const [cabId, setCabId] = useState('');
    const [message, setMessage] = useState('');

    const handleBookCab = async (e) => {
        e.preventDefault();
        try {
            await bookCab(cabId);  // Pass cabId directly
            setMessage('Cab booked successfully');
        } catch (error) {
            setMessage('Failed to book cab');
        }
    };

    return (
        <div>
            <h2>Book a Cab</h2>
            <form onSubmit={handleBookCab}>
                <div>
                    <label>Cab ID:</label>
                    <input
                        type="text"
                        value={cabId}
                        onChange={(e) => setCabId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Book</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default BookCab;
