import React from 'react'
import { Link } from 'react-router-dom';
const PostCard = ({ slug, image, title, content }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    return (
        <div key={`post-${slug}`} className="p-2 w-[22%] border border-stone-300 rounded-sm ">
            <Link to={`http://localhost:5175/posts/${slug}`}>
                <div className='w-full h-[130px]  rounded-xs'>
                    <img className='w-full h-full' src={image} alt={title} />
                </div>
                <h2 className='font-semibold '>{title} </h2>

                <p className='text-[.85rem] text-stone-700 font-normal'>{content.length < 27 ? content : truncateText(content, 28)}</p>
            </Link>
        </div>
    )
}

export default PostCard
