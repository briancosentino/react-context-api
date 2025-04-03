import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const PostList = () => {
    const url = 'http://localhost:3001/postsList'
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    const [postList, setPostList] = useState([])
    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPostList(data);

            })
    }
    console.log(postList);

    useEffect(() => {
        fetchData(url)
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <div className='w-[80%] py-16 gap-4 m-auto flex flex-wrap'>
                <h2 className='text-2xl mb-8 block w-full text-center font-semibold'>Le Nostre Ricette</h2>
                {postList.map((post) => (

                    <div key={`post-${post.slug}`} className="p-2 w-[22%] border border-stone-300 rounded-sm ">
                        <Link to={`http://localhost:5175/posts/${post.slug}`}>
                            <div className='w-full h-[130px]  rounded-xs'>
                                <img className='w-full h-full' src={post.image} alt={post.title} />
                            </div>
                            <h2 className='font-semibold '>{post.title} </h2>

                            <p className='text-[.85rem] text-stone-700 font-normal'>{post.content.length < 27 ? post.content : truncateText(post.content, 28)}</p>
                        </Link>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default PostList
