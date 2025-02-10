const express = require('express');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));