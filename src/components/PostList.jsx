import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../redux/features/post/postSlice";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    const loading = useSelector((state) => state.post.loading);
    const error = useSelector((state) => state.post.error);

    const [isFetching, setIsFetching] = useState(false);
    const page = useRef(1);

    useEffect(() => {
        dispatch(fetchPosts({ page: 1, limit: 5 }));
    }, [dispatch]);

    const fetchMorePosts = useCallback(() => {
        if (!isFetching) {
            setIsFetching(true);
            page.current += 1;
            dispatch(fetchPosts({ page: page.current, limit: 5 })).then(() => {  // fetch next 5 posts
                setIsFetching(false);
            });
        }
    }, [dispatch, isFetching]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && !isFetching) {
            fetchMorePosts();
        }
    }, [isFetching, fetchMorePosts]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <> <div className="container-s sticky-top">
        <button className='btn position-absulte top-left bg-primary text-light fw-bolder '>Post: {posts.length}</button>
        </div>
        <div className="container my-5 ">
           

           
            <div className="row  ">
          
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
            {isFetching && <div>Loading more posts...</div>}
        </div>
        </>
    );
};

export default PostList;
