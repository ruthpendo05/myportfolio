import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'Backend running' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
