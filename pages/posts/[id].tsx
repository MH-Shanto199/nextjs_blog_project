import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import Layout from '../../src/components/layout'
import { PostInterface } from '../../src/Interfaces/postInterfac'

export default function post() {
    const router = useRouter();
    const { id } = router.query;
    const getPosts = (): Promise<PostInterface> => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.data);
    const { data } = useQuery([id], getPosts);
    console.log(data)

    return(
        <Layout>
            <Head>
                <title>{ data?.title }</title>
            </Head>
            <div className="my-5 pt-3">
                <h1 className='mb-4'>{ data?.title }</h1>
                <p className="">{data?.body}{data?.body}{data?.body}{data?.body}{data?.body}{data?.body}</p>
                <Link href="/" className='mt-5'>Go Back</Link>
            </div>
        </Layout>
    )
}