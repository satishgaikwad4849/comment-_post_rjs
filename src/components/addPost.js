import React, { useState, useEffect } from 'react';
import moment from 'moment';

const initialState = {
  name: "",
  comment: "",
};
export default function Addpost() {
  const [post, setPost] = useState(initialState);
  const [posts, setPosts] = useState([]);

  // const clearState = () => {
  //   setPost({ ...initialState });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setPost((post) => ({ ...post, [name]: value }));
  };

  const getDate = () => {
    var today = new Date(),
    var time= moment(today).format("Do MMMM YYYY HH:mm")
    console.log(post)
    const postState = Object.assign(post, { time });
    setPosts((posts) => [...posts, postState]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDate();

    // clearState();
    // alert(value);
  };

  useEffect(() => {}, [post, posts]);
  console.log(posts);
  return (
    <div className="container">
      <div className="card">
        <div class="formContainer">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Comment</label>
                <input 
                  type="text" 
                  name="name" 
                  value={post.name} 
                  onChange={handleChange} 
                />
              </div>
              <div>
              <textarea
                type="text"
                name="comment"
                value={post.comment}
                onChange={handleChange}
              />
              </div>
              <div>
                <button className="col-25">Post</button>
              </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
