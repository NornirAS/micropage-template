import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.listen(5000, () => {
  console.log('app running on port 5000')
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/micropage.html'));
})