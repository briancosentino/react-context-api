import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PostList from '../components/PostList' // Add this import


const PostPage = () => {







    return (
        <div>
            <div className='w-[80%] py-16 gap-4 m-auto flex flex-wrap'>
                <h2 className='text-2xl mb-8 block w-full text-center font-semibold'>Le Nostre Ricette</h2>
                <PostList />


            </div>

        </div>
    )
}

export default PostPage
