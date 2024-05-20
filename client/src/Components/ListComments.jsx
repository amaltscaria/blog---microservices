// import { useState,useEffect } from "react";
// import axios from 'axios';

// const ListComments = ({postId}) => {
const ListComments = ({ comments }) => {
  // const [comments, setComments] = useState([]);
  // const fetchData = async () => {
  //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
  //     setComments(res.data);
  // }
  // useEffect(()=> {
  //     fetchData();
  // },[]);
  return (
    <ul>
      {comments.map((comment) => {
        let content;
        if(comment.status === 'approved'){
            content = comment.content;
        }
        if(comment.status === 'pending'){
            content = 'This comment is awaiting moderation';
        }
        if(comment.status === 'rejected'){
            content = 'This comment has been rejected';
        }
        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
};

export default ListComments;
