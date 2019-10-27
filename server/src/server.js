import express from 'express';
import path from 'path';
import getTodoList from './api/getTodoList';
import postTask from './api/postTask';
import deleteTask from './api/deleteTask';
import completeTask from './api/completeTask';


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(express.json());
app.get('/api/task/', getTodoList);


app.post('/api/task/', postTask);

app.delete('/api/task/:id', deleteTask);

app.patch('/api/task/:id', completeTask);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));
