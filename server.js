const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);

let formData = [];

app.post("/submit-form", (req, res) => {
  const data = req.body;
  if (!data.name || !data.email) {
    return res
      .status(400)
      .json({ success: false, message: "Name and email are required" });
  }

  formData.push(data);
  res.json({ success: true, message: "Form submitted successfully" });
});

app.get("/forms", (req, res) => {
  res.json(formData);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
