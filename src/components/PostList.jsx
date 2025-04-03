import React from 'react'
import PostContext from '../contexts/PostContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';


const PostList = () => {
    const { postList } = useContext(PostContext)


    return (
        <>

            {postList && postList.map((post) => (

                <PostCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                />
            ))}
        </>
    )
}

export default PostList
