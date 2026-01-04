const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const publicPath = path.join(__dirname, 'public');
const indexPath = path.join(publicPath, 'index.html');

app.use(express.static(publicPath));

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});