import express from 'express';
import getTodoList from './api/getTodoList';
import postTask from './api/postTask';
import deleteTask from './api/deleteTask';

const app = express();


app.use(express.json());
app.get('/api/task/', getTodoList);


app.post('/api/task/', postTask);

app.delete('/api/task/:id', deleteTask);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));
