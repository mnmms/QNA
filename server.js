const express = require("express");
const app = express();
const port = process.env.EXPRESS_SERVER_PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    success: "성공",
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
