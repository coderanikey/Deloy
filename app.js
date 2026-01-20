const express = require('express');

const app = express();
const PORT = 80;

// GET API
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
