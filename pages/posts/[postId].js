import React from 'react';

const Post = ({post}) => {
    return (
        <>
         <h2>{post.id}</h2>   
         <p>{post.body}</p>
        </>
    );
};

export default Post;

export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json();

    return{
        props:{
            post:data,
        },
    }
}