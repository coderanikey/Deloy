const express = require('express');

const app = express();
const PORT = 80;

// GET API
app.get('/', (req, res) => {
  res.send('Hello World aniket parkash' );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://locaddssdlhost:${PORT}`);
});
