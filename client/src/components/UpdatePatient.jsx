import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../axiosConfig';
import './UpdatePatient.css';

const UpdatePatient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', age: '', symptoms: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await api.get(`/patients/${id}`);
                setFormData(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPatient();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/patients/${id}`, formData);
            navigate(`/patients/${id}/details`);
        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container patient-update">
            <div className="header-container">
                <button className="button-common">Home</button>
                <h1>Update {formData.name}</h1>
                <button
                    className="button-common"
                    onClick={() => navigate(`/patients/${id}/details`)}
                >
                    Details
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="input-age"
                        required
                    />
                </div>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-name"
                        required
                    />
                </div>
                <div className="form-group">
                <label htmlFor="symptoms">Symptoms</label>
                    <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        className="input-symptoms"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="button-common-update">Update</button>
            </form>
        </div>
    );
};

export default UpdatePatient;







