import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Root Route (Fixes "Cannot GET /" error)
app.get('/', (req, res) => {
    res.send('PEOMNET DIGITAL API is active and running.');
});

// 2. Status Route (Used by your App.jsx to show "Backend running")
app.get('/api', (req, res) => {
    res.json({ status: 'Success', message: 'Backend running' });
});

// 3. Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New message from ${name} (${email}): ${message}`);
    res.status(200).send({ status: 'Success', message: 'Message Received' });
});

// Port Configuration
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});