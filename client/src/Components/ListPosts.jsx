import { useState, useEffect } from "react";
import axios from "axios";

import CreateComment from "./CreateComment";
import ListComments from "./ListComments";

const ListPosts = () => {
  const fetchPosts = async () => {
    // now we will fetch from query service => (:
    // const res = await axios.get("http://localhost:4000/posts");
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
            <h3>{post.title}</h3>
            {/* <ListComments postId= {post.id}></ListComments> */}
            <ListComments comments= {post.comments}></ListComments>
            <CreateComment postId = {post.id}></CreateComment>
        </div>
      </div>
    );
  });
  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
  </div>
};

export default ListPosts;
