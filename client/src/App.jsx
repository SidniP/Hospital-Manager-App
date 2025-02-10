import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmitPatient from './components/AdmitPatient';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import UpdatePatient from './components/UpdatePatient';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdmitPatient />} />
                <Route path="/patients" element={<PatientList />} />
                <Route path="/patients/:id/details" element={<PatientDetails />} />
                <Route path="/patients/:id/edit" element={<UpdatePatient />} />
            </Routes>
        </Router>
    );
}

export default App;

