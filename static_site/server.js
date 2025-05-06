const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, () => {
  console.log(`Static site running at http://localhost:${port}`);
});
