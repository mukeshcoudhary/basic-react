import React, { useState, useEffect } from 'react';

const Pra = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1></h1>
            <ul className='row '>
                {posts.map((post) => (
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='border-1 mt-3 p-4 rounded-3 h-70' key={post.id}>
                            <h5>id : {post.id}</h5>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Pra;
