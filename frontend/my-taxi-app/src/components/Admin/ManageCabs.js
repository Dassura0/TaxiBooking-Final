import React, { useEffect, useState } from 'react';
import { getCabs, addCab, updateCab, deleteCab } from '../../services/adminService';

const ManageCabs = () => {
    const [cabs, setCabs] = useState([]);
    const [newCab, setNewCab] = useState({ model: '', licensePlate: '' });
    const [editCab, setEditCab] = useState(null);

    useEffect(() => {
        const fetchCabs = async () => {
            try {
                const response = await getCabs();
                setCabs(response.data);
            } catch (error) {
                console.error('Error fetching cabs:', error);
            }
        };
        fetchCabs();
    }, []);

    const handleAddCab = async () => {
        try {
            await addCab(newCab);
            setNewCab({ model: '', licensePlate: '' });
            const response = await getCabs();
            setCabs(response.data);
        } catch (error) {
            console.error('Error adding cab:', error);
        }
    };

    const handleUpdateCab = async () => {
        try {
            await updateCab(editCab.id, editCab);
            setEditCab(null);
            const response = await getCabs();
            setCabs(response.data);
        } catch (error) {
            console.error('Error updating cab:', error);
        }
    };

    const handleDeleteCab = async (id) => {
        try {
            await deleteCab(id);
            const response = await getCabs();
            setCabs(response.data);
        } catch (error) {
            console.error('Error deleting cab:', error);
        }
    };

    return (
        <div className="container">
            <h2>Manage Cabs</h2>
            <input
                type="text"
                value={newCab.model}
                onChange={(e) => setNewCab({ ...newCab, model: e.target.value })}
                placeholder="Model"
            />
            <input
                type="text"
                value={newCab.licensePlate}
                onChange={(e) => setNewCab({ ...newCab, licensePlate: e.target.value })}
                placeholder="License Plate"
            />
            <button onClick={handleAddCab}>Add Cab</button>

            {editCab && (
                <div>
                    <h3>Edit Cab</h3>
                    <input
                        type="text"
                        value={editCab.model}
                        onChange={(e) => setEditCab({ ...editCab, model: e.target.value })}
                        placeholder="Model"
                    />
                    <input
                        type="text"
                        value={editCab.licensePlate}
                        onChange={(e) => setEditCab({ ...editCab, licensePlate: e.target.value })}
                        placeholder="License Plate"
                    />
                    <button onClick={handleUpdateCab}>Update Cab</button>
                </div>
            )}

            <ul>
                {cabs.map((cab) => (
                    <li key={cab.id}>
                        <h3>Cab ID: {cab.id}</h3>
                        <p>Model: {cab.model}</p>
                        <p>License Plate: {cab.licensePlate}</p>
                        <button onClick={() => setEditCab(cab)}>Edit</button>
                        <button onClick={() => handleDeleteCab(cab.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageCabs;
