import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"
import Loader from '../components/Loader'
const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setLoading(false)
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center min-h-[90vh] flex items-center justify-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login or create account to see posts
                            </h1>
                            <p className="text-gray-500">No posts available</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8 container mx-auto min-h-[90vh]'>
            <Container>
                <h1 className='px-4  pb-3 font-bold text-xl'>Explore the latest Blogs</h1>
                <div className='flex flex-wrap'>
                    {loading && (
                        <div className='w-full flex items-center justify-center'>
                            <Loader />
                        </div>
                    )}
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/0 sm:w-1/2 md:w-1/3 lg:w-1/3'>

                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home