import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

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
    const {type, data} = req.body;
    if(type === 'PostCreated') {
        const {id, title} = data;
        posts[id] = {id, title, comments:[]};
    }
    if(type === 'CommentCreated') {
        const {id, content, postId} = data;
        posts[postId].comments.push({id,content});
    }
    console.log(posts);
    res.send({message: 'ok'})
});

app.listen(4002, () => {
  console.log("Query service listening on 4002");
});
