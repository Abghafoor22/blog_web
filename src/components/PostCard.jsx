import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import parse from "html-react-parser";
const PostCard = ({ $id, title, featuredImage, content }) => {
    return (
        <Link to={`/post/${$id}`} >
            <div className='bg-white rounded-xl pb-4 h-full flex flex-col'>
                <div className='w-full justify-center mb-6 overflow-hidden rounded-t-xl h-48 flex-shrink-0'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='w-full h-full object-cover rounded-t-xl'
                    />
                </div>
                <div className='px-3 flex-grow'>
                    <h2 className='text-left text-2xl font-semibold mb-2'> {title}</h2>
                    <small className=''> {parse(
                        content.length > 100
                            ? `${content.substring(0, 100)}...`
                            : content
                    )}</small>
                </div>
                <div className='px-3 mt-6 flex items-center gap-3'>
                    <div className='w-[40px] h-[40px] bg-gray-600 rounded-full overflow-hidden'>
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-left font-semibold'>Author Name</h3>
                        <span className='text-sm text-gray-500'>Author Bio</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default PostCard