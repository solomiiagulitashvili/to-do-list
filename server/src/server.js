import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));