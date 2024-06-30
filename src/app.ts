import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello, World! x3');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
