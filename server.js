const express = require("express");
const { Sequelize } = require("sequelize");

const { Sequelize, Op, Model, DataTypes } = require("sequelize");

/* set server */
const app = express();
const port = process.env.EXPRESS_SERVER_PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    success: "성공",
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

/* set ORM */
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
});

// Test the connection
sequelize
  .authenticate()
  .then((res) => {
    console.log("Connection has been established successfully.", res);
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Closing the connection
sequelize
  .close()
  .then(() => {})
  .catch((error) => {});
