import express from "express";
import { randomBytes } from "crypto";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
      id,
      title,
    };
    await axios.post("http://localhost:4005/events", {
      type: "PostCreated",
      data: { id, title },
    });
    res.status(201).send(posts[id]);
  } catch (err) {
    console.log(err);
  }
});

app.post('/events', (req, res) => {
    console.log('Recieved Event: ', req.body.type);
    res.send({message:'ok'});
})

app.listen(4000, () => {
  console.log("Post Service listening on 4000");
});
