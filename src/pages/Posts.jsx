import { useState, useEffect } from 'react';
// import { getPosts } from '../service/http';

const Posts = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // const posts = await getPosts();
      // setPosts(posts.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='container text-center'>
      <h1>Posts</h1>
      <table className='table table-stripe'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {/* {Posts.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
