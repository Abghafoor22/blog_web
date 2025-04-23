import React, { useState, useEffect } from 'react'
import { Container, PostCard } from "../components"
import appwriteService from "../appwrite/config"
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
        // const { user } =  useSelector(state => state.auth.status)
        // console.log(user);
    
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setLoading(false)
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {loading && (
                        <div className='w-full flex items-center justify-center'>
                            <Loader />
                        </div>
                    )}
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/0 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts