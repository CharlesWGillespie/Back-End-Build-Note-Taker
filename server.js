const express = require("express");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.listen(PORT, () => {
  console.log("server is running");
});

app.get("/api/notes", (req, res) => {});
