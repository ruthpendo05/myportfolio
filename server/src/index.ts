import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New message from ${name}: ${message}`);
    res.status(200).send({ status: 'Success', message: 'Message Received' });
});

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));