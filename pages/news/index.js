import React from 'react';

const NewsArticleList = ({articles}) => {
    return (
        <>
           <h1>All news article</h1> 
           {articles.map(article => (
        
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
          <hr />
        </div>
      
    ))}
        </>
    );
};

export default NewsArticleList;

export async function getServerSideProps(){
    const res  = await fetch('http://localhost:4000/news');
    const data = await res.json();

    return{
        props:{
            articles: data,
        },
    }
}