import fs from 'fs';
import path from 'path';


const getTodoList = (req, res) => {
  let tasks;
  fs.readFile(path.resolve(__dirname, '../data/database.json'), 'utf8', (err, data) => {
    if (err) throw err;
    tasks = JSON.parse(data);
    res.send(tasks);
  });
};

export default getTodoList;
