import axios from 'axios'
import { useQuery } from 'react-query'
import { PostInterface } from '../../Interfaces/postInterfac'
import BlogCard from '../fragments/blogCard'

export default function Blog() {
    const getPosts = (): Promise<PostInterface[]> => axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data);
    const { data } = useQuery(['Post'], getPosts);
    const slicedData = data?.slice(0, 15);
    return (
        <div className="row mt-5">
            <h3>Don't forget to check out my Blogs about different programing theme</h3>
            {
                slicedData?.map((post) => <BlogCard post={post} key={post.id}/>)
            }
        </div>
    )
}