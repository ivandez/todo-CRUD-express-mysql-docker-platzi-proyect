
const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('😎');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGTERM", () => {
  process.exit(0)
})