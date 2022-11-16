import Link from "next/link";

export default function BlogCard(props:any) {
    const { post } = props
    return(
        <div className="blog-card mt-5">
            <Link href={`/posts/${post.id}`}><p className="fs-3 m-0">{post.title}</p></Link>
            <p className="">{post.body}</p>
            <span className="Date">10 February 2022</span>
        </div>
    );
}