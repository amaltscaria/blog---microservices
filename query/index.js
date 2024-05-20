import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    posts[postId].comments.push({ id, content, status });
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

const posts = {};
// posts structure
// posts = {
//     id : {
//         postid : 'xxx',
//         title: 'post title',
//         comments: [
//             {id: 'commentId', content: 'comment!'}
//         ]
//     }
// }

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("Recieved Event: ", type);

  handleEvent(type, data);
  res.send({ message: "ok" });
});

app.listen(4002, async () => {
  try {
    console.log("Query service listening on 4002");
    const res = await axios.get("http://localhost:4005/events");
    for (const event of res.data) {
      console.log("Processing event:", event.type);
      handleEvent(event.type, event.data);
    }
  } catch (err) {
    console.log(err);
  }
});
