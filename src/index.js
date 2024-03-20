
const express = require("express");

const app = express();

const todoRoutes = require('./routes/todoRoutes');

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGTERM", () => {
  process.exit(0)
})

// routes
app.use('/api/v1/todo', todoRoutes);