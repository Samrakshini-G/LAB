const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function add(a, b) {
  return Number(a) + Number(b);
}

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Node.js CI/CD Pipeline Running' });
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.status(200).json({ result: add(a, b) });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { app, add };