import express from "express";
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("home route");
  res.send("home route");
});

