import { useState } from "react";
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const changeHandler = (event) => {
        setTitle(event.target.value);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
           title 
        });
        setTitle('');
    }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="form-group">
        <label htmlFor="inputField">Title</label>
        <input id="inputField" value={title} onChange={changeHandler} type="text" className="form-control" />
        </div>
        <button className="bton btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
