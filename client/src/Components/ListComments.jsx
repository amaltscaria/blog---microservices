// import { useState,useEffect } from "react";
// import axios from 'axios';

// const ListComments = ({postId}) => {
const ListComments = ({comments}) => {
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
    {comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
   </ul>
  )
}

export default ListComments
