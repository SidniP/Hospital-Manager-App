const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
    const { name, age, symptoms } = req.body;
    if (!name || !age || !symptoms) return res.status(400).json({ msg: 'All fields are required' });
    if (name.length < 1 || name.length > 40) return res.status(400).json({ msg: 'Name must be 1-40 characters' });
    if (age < 1 || age > 140) return res.status(400).json({ msg: 'Age must be between 1 and 140' });
    if (symptoms.length < 4) return res.status(400).json({ msg: 'Symptoms must be at least 4 characters' });

    try {
        const newPatient = new Patient({ name, age, symptoms });
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ msg: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updatePatient = async (req, res) => {
    const { name, age, symptoms } = req.body;
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, { name, age, symptoms }, { new: true });
        if (!patient) return res.status(404).json({ msg: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) return res.status(404).json({ msg: 'Patient not found' });
        res.json({ msg: 'Patient discharged' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};