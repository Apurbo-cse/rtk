import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/post/postSlice";


const PostList = () => {
    const dispatch = useDispatch();

    // Extract data from Redux store using useSelector
    const posts = useSelector((state) => state.post.posts);
    const loading = useSelector((state) => state.post.loading);
    const error = useSelector((state) => state.post.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 mb-2" key={post.id}>
                        <div className="card shadow ">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
