import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../axiosConfig';
import './PatientList.css';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await api.get('/patients'); 
                setPatients(response.data); 
            } catch (err) {
                console.error(err);
            }
        };
        fetchPatients();
    }, []);

    return (
        <div className="container">
            <header className="header">
                <button className="button-common" >Home</button>
                <h1 className="title">Patient List</h1>
                <button className="button-common" onClick={() => navigate('/')}>Admit</button>
            </header>
            <div className="patient-list">
                {patients.length === 0 ? (
                    <p>No patients found. Click "Admit" to add a new patient.</p>
                ) : (
                    patients.map((patient) => (
                        <div key={patient._id} className="patient-card">
                            <h2
                                className="patient-name"
                                onClick={() => navigate(`/patients/${patient._id}/details`)}
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            >
                                {patient.name}
                            </h2>
                            <p>Age: {patient.age}</p>
                            <p> {patient.symptoms}</p>
                            <div className="actions">
                                <button
                                    className="edit-button"
                                    onClick={() => navigate(`/patients/${patient._id}/edit`)}
                                >
                                    edit
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PatientList;


