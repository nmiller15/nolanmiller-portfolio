import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';

function BlogList() {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        'https://dev.to/api/articles?username=nmiller15',
        // {
        //   headers: {
        //     "api-key": import.meta.env.REACT_APP_DEVTO_API_KEY,
        //   },
        // },
      );
      if (!response.ok) return;
      const jsonResponse = await response.json();
      setArticles(jsonResponse);
    };
    getArticles();
  }, []);

  return (
    <>
      {articles.map((article, index) => {
        if (index > 2) return;
        return <BlogCard key={index} article={article} />;
      })}
      <div className="w-full py-8 text-center">
        <a
          href="https://dev.to/nmiller15"
          target="_blank"
          className="text-lg text-surface-500 underline hover:text-white"
        >
          See More
        </a>
      </div>
    </>
  );
}

export default BlogList;
