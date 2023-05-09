import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: `${__dirname}/.env` });

const PORT = process.env.PORT || 8080;

const app = express();

app.get(`/`, (req, res) => {
  res.status(200).send({ message: "Server is up and healthy." });
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
