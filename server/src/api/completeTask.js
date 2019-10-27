import fs from 'fs';
import path from 'path';

const completeTask = (req, res) => {
  fs.readFile(path.resolve(__dirname, '../data/database.json'), 'utf8', (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data);
    tasks = tasks.map((task) => {
      if (task.id === req.params.id) {
        if (task.done === false) {
          task.done = true;
        } else {
          task.done = false;
        }
      }
      return task;
    });

    fs.writeFile(path.resolve(__dirname, '../data/database.json'), JSON.stringify(tasks), (error) => {
      if (error) {
        throw error;
      }
      res.json(tasks);
    });
  });
};

export default completeTask;
