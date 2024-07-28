import React, { useState, useEffect } from 'react';
import customerService from '../../services/customerService';  // Import default export
const { getCabs } = customerService;  // Destructure functions from the imported object

const ViewCabs = () => {
    const [cabs, setCabs] = useState([]);

    useEffect(() => {
        const fetchCabs = async () => {
            try {
                const cabList = await getCabs();  // Call the function
                setCabs(cabList);
            } catch (error) {
                console.error('Failed to fetch cabs', error);
            }
        };

        fetchCabs();
    }, []);

    return (
        <div>
            <h2>Available Cabs</h2>
            <ul>
                {cabs.map(cab => (
                    <li key={cab.id}>{cab.name} - {cab.model}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewCabs;
