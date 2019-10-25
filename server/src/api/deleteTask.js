import fs from 'fs';
import path from 'path';


const deleteTask = (req, res) => {
  fs.readFile(path.resolve(__dirname, '../data/database.json'), 'utf8', (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data);
    const found = tasks.some((task) => task.id === req.params.id);
    if (found) {
      tasks = tasks.filter((task) => task.id !== req.params.id);
    } else {
      res.status(404).json({ msg: `task not found ${req.params.id}` });
      return;
    }

    fs.writeFile(path.resolve(__dirname, '../data/database.json'), JSON.stringify(tasks), (error) => {
      if (error) {
        throw error;
      }
      res.json(tasks);
    });
  });
};

export default deleteTask;
