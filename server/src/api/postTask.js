import fs from 'fs';
import path from 'path';
import nanoid from 'nano-id';

const postTask = (req, res) => {
  const newTask = {
    id: nanoid(5),
    title: req.body.title,
    text: req.body.text,
    done: false,
  };
  if (!newTask.title || !newTask.text) {
    return res.status(400).json({ msg: 'add title and text' });
  }
  fs.readFile(path.resolve(__dirname, '../data/database.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const tasks = JSON.parse(data);
    tasks.push(newTask);
    fs.writeFile(path.resolve(__dirname, '../data/database.json'), JSON.stringify(tasks), (err) => {
      if (err) {
        throw err;
      }

      res.json(tasks);
    });
  });
};

export default postTask;
