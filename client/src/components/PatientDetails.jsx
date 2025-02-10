import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../axiosConfig';
import './PatientDetails.css';

const PatientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await api.get(`/patients/${id}`);
                setPatient(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPatient();
    }, [id]);

    const handleDelete = async () => {
        try {
            await api.delete(`/patients/${id}`);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    if (!patient) return <p>Loading...</p>;

    return (
        <div className="container patient-details">
            <header className="header">
            <button className="button-common">Home</button>
                <h1>{patient.name} Details</h1>
                <button
                    className="button-common"
                    onClick={() => navigate(`/patients/${id}/edit`)}
                >
                    Update
                </button>
            </header>
            <div className="patient-info">
                <p>{patient.age} years of age.</p>
                <h2>Symptoms</h2>
                <p><strong>{patient.symptoms}</strong></p>
                <button
                onClick={handleDelete}
                className="button-discharge"
            >
                Discharge Patient
            </button>
            </div>
        </div>
    );
};

export default PatientDetails;



