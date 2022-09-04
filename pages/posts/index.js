import Link from 'next/link';
import React from 'react';

const PostList = ({posts}) => {
    return (
        <>
        <h1> Post list</h1>
        {
            posts.map((post)=>{
                return(
                    <div key= {post.id}>
                        <Link href={`/posts/${post.id}`} passHref> 
                        <p>{post.id}: {post.title}</p>
                        </Link>
                        <hr></hr>
                    </div>
                )
            })
        }
        </>
    );
};

export default PostList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return{
        props:{
            posts: data,
        }
    }
}