import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';
import './AdmitPatient.css';

const AdmitPatient = () => {
    const [formData, setFormData] = useState({ age: '', name: '', symptoms: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.age) newErrors.age = "A patient's age is required";
        else if (formData.age < 1 || formData.age > 140) newErrors.age = 'Age must be between 1 and 140';
        if (!formData.name) newErrors.name = "A patient's name is required";
        if (!formData.symptoms) newErrors.symptoms = "A patient's symptoms are required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            await api.post('/patients', formData);
            navigate('/patients');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="admit-patient-container">
            <nav>
                <button onClick={() => navigate('/')} className="home-button">Home</button>
                <h1 className='nav-title'>Admit Patient</h1>
            </nav>
            <form className="admit-patient-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    {errors.age && <p className="error-message">{errors.age}</p>}
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    {errors.name && <p className="error-message">{errors.name}</p>}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="symptoms">Symptoms</label>
                    {errors.symptoms && <p className="error-message">{errors.symptoms}</p>}
                    <textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="admit-button">Admit</button>
            </form>
        </div>
    );
};

export default AdmitPatient;



