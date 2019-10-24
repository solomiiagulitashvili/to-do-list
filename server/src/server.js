import express from 'express';
import getTodoList from './api/getTodoList';

const app = express();


app.get('/api/task/', getTodoList);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));
