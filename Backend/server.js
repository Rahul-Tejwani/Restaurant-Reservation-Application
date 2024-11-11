import app from "./app.js";
import path from "path";
import express from "express";

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`);
});
