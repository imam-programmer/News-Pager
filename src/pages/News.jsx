
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NewsCart from "../components/NewsCart";

const News = () => {
  const { country, category, Articles, setArticles } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchAllNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country,
            category,
            apiKey: import.meta.env.VITE_API_KEY,
          },
        }
      );
        if (!ignore) setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchAllNews();
    return () => {
      ignore = true;
    };
  }, [category, country]);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 pt-24 pb-10 px-4 md:px-3">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold capitalize mb-6 text-gray-800 dark:text-gray-200">
          {category} News
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        ) 
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-7 gap-4">
            {Articles.map((item, idx) => (
              <NewsCart key={item.url || idx} article={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;