const fs = require("fs");
const path = require("path");

const dbFilePath = path.join(__dirname, "db.json");

const readFromFile = () => {
  const data = fs.readFileSync(dbFilePath, "utf8");
  return JSON.parse(data);
};

const writeToFile = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data), "utf8");
};

module.exports = { readFromFile, writeToFile };
